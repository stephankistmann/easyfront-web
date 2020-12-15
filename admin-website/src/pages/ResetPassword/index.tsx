import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiCheck, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory, useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../assets/logo.png';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  // password-confirmation: string;
}

const ResetPassword: React.FC = () => {
  const { token, user }: { user: string; token: string } = useParams();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatóriaw'),
          // password-confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const newData: ResetPasswordFormData = Object.assign(data, { token });

        // add new route
        await api.patch(`/users/${user}/confirm`, newData);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar a senha, tente novamente.',
        });
      }
    },
    [history, addToast, token, user],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="https://www.easyfront.live/">
            <img src={logoImg} alt="EasyFront" />
          </Link>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            {/* <Input
              name="password-confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmar senha"
            /> */}

            <Button type="submit" name="ChangePasswordButton" icon={FiCheck}>
              Alterar senha
            </Button>

            <Link to="/">Voltar para login</Link>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
