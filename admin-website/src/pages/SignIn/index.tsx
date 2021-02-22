import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiLock, FiLogIn, FiMail, FiUser, FiHelpCircle } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import InputUnform from '../../components/InputUnform';
import Button from '../../components/Button';
import {
  Container,
  Content,
  Background,
  AnimationContainer,
  Links,
} from './styles';
import logoImg from '../../assets/logo.png';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória.'),
});

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="EasyFront" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <InputUnform name="email" icon={FiMail} placeholder="E-mail" />

            <InputUnform
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit" name="LoginButton" icon={FiLogIn}>
              Entrar
            </Button>

            <Links>
              <Link to="/forgot-password">
                Esqueci minha senha
                <FiHelpCircle />
              </Link>
              <div />
              <a href="http://portal.easyfront.cloud/">
                Entrar como morador
                <FiUser />
              </a>
            </Links>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
