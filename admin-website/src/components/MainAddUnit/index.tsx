import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, FormContainer, FormSteps } from './styles';
import Header from './Header';
import Input from '../Input';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Select from '../Select';
import { useSuperunit } from '../../hooks/superunit';

interface MaindAddUnitProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

interface IFormData {
  name: string;
  type: string;
}

const MaindAddUnit: React.FC<MaindAddUnitProps> = ({ name, icon: Icon }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { selected } = useSuperunit();

  const superunitId = selected?.id;

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      console.log(data, 'aaa');

      const unit = { public_area: data.type, name: data.name };

      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          public_area: Yup.string()
            .required('Tipo obrigatorio')
            .oneOf([
              'gym',
              'apt',
              'block',
              'house',
              'condominium',
              'deppartment',
              'store',
              'room',
            ]),
        });

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
        console.log(err);
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
      }
    },
    [addToast, superunitId],
  );

  return (
    <Container>
      <Header name={name} icon={Icon} />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Select
            name="type"
            options={[
              { label: 'Academia', value: 'gym' },
              { label: 'Apartamento', value: 'apt' },
              { label: 'Bloco', value: 'block' },
              { label: 'Casa', value: 'house' },
              { label: 'Condomínio', value: 'condominium' },
              { label: 'Departamento', value: 'deppartment' },
              { label: 'Loja', value: 'store' },
              { label: 'Sala', value: 'room' },
            ]}
            defaultValue={{
              label: 'Tipo',
              value: '',
            }}
          />
          <Button type="submit">Adicionar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default MaindAddUnit;
