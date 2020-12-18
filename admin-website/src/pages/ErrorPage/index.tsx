import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="EasyFront" />
      <Content>
        <span>Você ainda não é administrador de nenhuma unidade.</span>
      </Content>
      <Button icon={FiLogOut}>Sair</Button>
    </Container>
  );
};

export default ErrorPage;
