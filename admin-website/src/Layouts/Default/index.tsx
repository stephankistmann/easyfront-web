import React from 'react';
import SideBar from '../../components/SideBar';
import { Container, Content, Main } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <SideBar />
    <Main>
      <Content>{children}</Content>
    </Main>
  </Container>
);

export default Layout;
