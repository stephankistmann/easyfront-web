import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Container, Content, HeaderContentContainer } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Sidebar />
    <HeaderContentContainer>
      <Header />
      <Content>{children}</Content>
    </HeaderContentContainer>
  </Container>
);

export default Layout;
