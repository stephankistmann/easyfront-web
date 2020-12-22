import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiPlus, FiUserPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, MainHeader } from './styles';
import InputUnform from '../../components/InputUnform';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Layout from '../../Layouts/Default';
import Header from '../../components/Header';

const PeerAdd: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
  });

  const handleSubmit = useCallback(
    async (data: object) => {
      formRef.current?.setErrors({});

      try {
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
    [addToast, schema],
  );

  return (
    <Layout>
      <Header
        title={{ value: 'Usuários', path: '/peers' }}
        subTitle={{ value: 'Adicionar Parceiro', path: '/peers/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiUserPlus />
            Adicionar Parceiro
          </h1>
        </MainHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputUnform name="email" placeholder="E-mail" icon={FiMail} />
          <Button type="submit" icon={FiPlus} name="AddButton">
            Adicionar
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default PeerAdd;
