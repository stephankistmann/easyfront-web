import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.png';
import Logout from '../../components/Sidebar/LogoutButton';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="EasyFront" />

      <Content>
        <span>Você ainda não é administrador de nenhuma unidade.</span>
      </Content>
      <Logout name="Logout" icon={FiLogOut} />
    </Container>
  );
};

export default ErrorPage;
