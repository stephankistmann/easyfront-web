import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiMapPin, FiPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, FormContainer, FormSteps } from './styles';
import Header from './Header';
import Input from '../Input';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Select from '../Select';
import Checkbox from '../Checkbox';

interface MainAddUnitEmergencyProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const MainAddUnitEmergency: React.FC<MainAddUnitEmergencyProps> = ({
  name,
  icon: Icon,
}) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = data;

        await api.post('/users', response);

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Parceiro cadastrado com sucesso.',
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
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Header name={name} icon={Icon} />
      <FormSteps>
        <Button
          type="submit"
          name="unitsData"
          onClick={() => history.push('/newunit')}
        >
          Dados da unidade
        </Button>
        <Button
          type="submit"
          name="emergencyButton"
          onClick={() => history.push('/newunit/emergency')}
        >
          Emergência
        </Button>
      </FormSteps>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="phone" placeholder="Telefone" />
          <Select
            name="affinity"
            options={[
              { label: 'Academia', value: '' },
              { label: 'Apartamento', value: '' },
              { label: 'Área de lazer', value: '' },
              { label: 'Armário', value: '' },
              { label: 'Bloco', value: '' },
              { label: 'Casa', value: '' },
              { label: 'Condomínio', value: '' },
              { label: 'Departamento', value: '' },
              { label: 'Empresa', value: '' },
              { label: 'Espaço', value: '' },
              { label: 'Espaço compartilhado', value: '' },
              { label: 'Estacionamento', value: '' },
              { label: 'Loja', value: '' },
              { label: 'Portaria', value: '' },
              { label: 'Sala', value: '' },
              { label: 'Setor', value: '' },
            ]}
            defaultValue={{
              label: 'Grau de parentesco',
              value: '',
            }}
          />
          <Button
            type="submit"
            icon={FiPlus}
            name="AddButton"
            onClick={() => history.push('/newunit/emergency')}
          >
            Adicionar
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default MainAddUnitEmergency;
