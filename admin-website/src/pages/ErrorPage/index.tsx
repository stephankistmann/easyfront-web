import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';

const ErrorPage: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logoImg} alt="EasyFront" />
      <Content>
        <span>Você ainda não é administrador de nenhuma unidade.</span>
      </Content>
      <Button icon={FiLogOut} onClick={signOut}>
        Sair
      </Button>
    </Container>
  );
};

export default ErrorPage;
