import React from 'react';
import SideMenu from '../components/SideMenu';
import { Container, Content, Main } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <SideMenu />
    <Main>
      <Content>{children}</Content>
    </Main>
  </Container>
);

export default Layout;
