import React, { useRef, useCallback, useState } from 'react';
import { FiHome, FiPlus } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, MainHeader, ButtonContainer } from './styles';
import InputUnform from '../../components/InputUnform';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Select from '../../components/Select';
import { useSuperunit } from '../../hooks/superunit';
import Layout from '../../Layouts/Default';
import Header from '../../components/Header';

interface IFormData {
  name: string;
  type: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  public_area: Yup.string()
    .required('Tipo obrigatorio')
    .oneOf([
      'Academia',
      'Apartamento',
      'Bloco',
      'Casa',
      'Condomínio',
      'Departamento',
      'Loja',
      'Sala',
    ]),
});

const UnitAdd: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { selected } = useSuperunit();
  const [loading, setLoading] = useState(false);

  const superunitId = selected?.id;

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      const unit = { public_area: data.type, name: data.name };

      formRef.current?.setErrors({});

      setLoading(true);

      try {
        await schema.validate(unit, {
          abortEarly: false,
        });

        await api.post(`/superunities/${superunitId}/unities`, unit);

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Unidade cadastrada com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao tentar realiazar o cadastro, tente novamente.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, superunitId],
  );

  return (
    <Layout>
      <Header
        title={{ value: 'Unidades', path: '/units' }}
        subTitle={{ value: 'Adicionar Unidade', path: '/units/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiHome />
            Adicionar Unidade
          </h1>
        </MainHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputUnform name="name" placeholder="Nome" />
          <Select
            name="type"
            options={[
              { label: 'Academia', value: 'Academia' },
              { label: 'Apartamento', value: 'Apartamento' },
              { label: 'Bloco', value: 'Bloco' },
              { label: 'Casa', value: 'Casa' },
              { label: 'Condomínio', value: 'Condomínio' },
              { label: 'Departamento', value: 'Departamento' },
              { label: 'Loja', value: 'Loja' },
              { label: 'Sala', value: 'Sala' },
            ]}
            defaultValue={{
              label: 'Tipo',
              value: '',
            }}
          />
          <ButtonContainer>
            <Button type="submit" icon={FiPlus} loading={loading}>
              Adicionar
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </Layout>
  );
};

export default UnitAdd;
