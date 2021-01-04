import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Container, Content, Main } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Sidebar />
    <Main>
      <Content>{children}</Content>
    </Main>
  </Container>
);

export default Layout;
