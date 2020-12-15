import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Container, Content, Main } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <SideMenu />
    <Main>
      <Header />
      <Content>{children}</Content>
    </Main>
  </Container>
);

export default Layout;
