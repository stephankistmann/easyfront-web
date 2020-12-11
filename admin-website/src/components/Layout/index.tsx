import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
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
