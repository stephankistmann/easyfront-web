import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Container, Content, Main } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Sidebar />
    <Main>
      <Header />
      <Content>{children}</Content>
    </Main>
  </Container>
);

export default Layout;
