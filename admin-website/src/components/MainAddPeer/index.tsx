import React, { useRef, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, FormContainer } from './styles';
import Header from './Header';
import Input from '../Input';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface MainAddPeerProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const MainAddPeer: React.FC<MainAddPeerProps> = ({ name, icon: Icon }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

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
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Button type="submit" icon={FiPlus} name="AddButton">
            Adicionar
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default MainAddPeer;
