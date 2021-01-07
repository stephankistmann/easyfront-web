/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { FiCamera, FiFile, FiSave, FiSmartphone, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Header from '../../components/Header';
import InputUnform from '../../components/InputUnform';
import InputMask from '../../components/InputMask';
import Layout from '../../Layouts/Default';
import userIcon from '../../assets/defaultUserIcon.png';
import {
  Container,
  AvatarInput,
  ButtonContainer,
  AvatarContainer,
  FormContainer,
} from './styles';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import Select from '../../components/Select';
import Button from '../../components/Button';

interface ProfileFormData {
  name: string;
  phone: string;
  nature: string;
  gender: string;
  rg?: string;
  cpf: string;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\u00C0-\u00FF ]+$/i, 'Digite apenas letras')
    .required('Nome obrigatório'),
  phone: Yup.string()
    .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Digite um número válido')
    .required('Celular obrigatório'),
  cpf: Yup.string().matches(
    /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    'Digite um CPF válido',
  ),
  rg: Yup.string().length(10, 'Digite um RG válido'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'not-informed'])
    .required('Gênero obrigatório'),
  nature: Yup.string()
    .oneOf(['physic', 'juridic'])
    .required('Natureza obrigatória'),
});

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!user) return;

    if (user.gender === 'male') {
      const userGender = 'Masculino';

      formRef.current?.setFieldValue('gender', {
        label: userGender,
        value: user.gender,
      });
    } else {
      const userGender = 'Feminino';
      formRef.current?.setFieldValue('gender', {
        label: userGender,
        value: user.gender,
      });
    }

    if (user.nature === 'physic') {
      const userNature = 'Físico';

      formRef.current?.setFieldValue('nature', {
        label: userNature,
        value: user.nature,
      });
    } else {
      const userNature = 'Jurídico';
      formRef.current?.setFieldValue('nature', {
        label: userNature,
        value: user.nature,
      });
    }
  }, [user]);

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        data.phone = data.phone.replace(/[\(\)\s-]/g, '');

        if (data.cpf) data.cpf = data.cpf.replace(/[\.-]/g, '');

        const { name, phone, cpf, gender, nature, rg } = data;

        const formData = {
          name,
          phone,
          cpf,
          rg,
          gender,
          nature,
        };

        const response = await api.put('/users', formData);

        updateUser(response.data);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description: 'Seus dados foram atualizadas com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu um erro ao tentar atualizar os dados, tente novamente.',
        });
      }
    },
    [addToast, updateUser, history],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Layout>
      <Header title={{ value: 'Perfil', path: '/profile' }} />
      <Container>
        {/* <MainHeader>
          <h1>
            <FiUser />
            Perfil
            <Tooltip
              title="Teste de largura do container"
              width={250}
              height={40}
              direction="down"
            />
          </h1>
        </MainHeader> */}
        <AvatarContainer>
          <AvatarInput>
            <img src={user.avatar_url || userIcon} alt={user.name} />
            <div>
              <label htmlFor="avatar">
                <FiCamera />
                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
              <h1>Editar</h1>
            </div>
          </AvatarInput>
        </AvatarContainer>
        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={{
              name: user.name,
              phone: user.phone,
              rg: user.rg,
            }}
          >
            <InputUnform name="name" icon={FiUser} placeholder={user.name} />
            <div className="nameToPhoneSeparation" />
            <InputMask
              icon={FiSmartphone}
              name="phone"
              placeholder="Celular"
              mask="(99) 99999-9999"
            />
            <InputMask
              icon={FiFile}
              name="cpf"
              placeholder={user.cpf}
              mask="999.999.999-99"
              inputName="CPF - "
              defaultValue={user.cpf}
            />
            <InputMask
              name="rg"
              icon={FiFile}
              placeholder={user.rg}
              mask="9999999999"
              inputName="RG -  "
            />

            <Select
              name="gender"
              options={[
                { label: 'Masculino', value: 'male' },
                { label: 'Feminino', value: 'female' },
                { label: 'Não informado', value: 'not-informed' },
              ]}
              defaultValue={{
                label: 'Gênero',
                value: user.gender,
              }}
            />

            <div className="genderToNatureSeparation" />

            <Select
              name="nature"
              options={[
                { label: 'Físico', value: 'physic' },
                { label: 'Jurídico', value: 'juridic' },
              ]}
              defaultValue={{
                label: 'Natureza',
                value: user.nature,
              }}
            />

            <ButtonContainer>
              <Button type="submit" icon={FiSave}>
                Salvar
              </Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default Profile;
