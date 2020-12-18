import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { FiLock, FiSend } from 'react-icons/fi';
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
  token: string;
  passwordConfirmation?: string;
}

const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('Senha obrigatóriaw'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'Confirmação incorreta',
  ),
});

const ResetPassword: React.FC = () => {
  const { token, user }: { user: string; token: string } = useParams();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      formRef.current?.setErrors({});
      setLoading(true);

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        const newData: ResetPasswordFormData = Object.assign(data, { token });

        delete newData.passwordConfirmation;

        await api.post(`/password/reset/${user}`, newData);

        addToast({
          type: 'success',
          title: 'Senha redefinida',
          description: 'Sua senha foi redefinida com sucesso',
        });

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
      } finally {
        setLoading(false);
      }
    },
    [history, addToast, token, user],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="EasyFront" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="passwordConfirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmar senha"
            />

            <Button
              name="ResetPasswordButton"
              loading={loading}
              type="submit"
              icon={FiSend}
            >
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
