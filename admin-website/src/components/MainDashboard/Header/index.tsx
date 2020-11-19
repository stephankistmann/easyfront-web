import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, Title } from './styles';

interface HeaderProps {
  icon: React.ComponentType<IconBaseProps>;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ icon: Icon, name }) => (
  <Container>
    <Title>
      {Icon && <Icon size={34} />}
      <h1>{name}</h1>
    </Title>
  </Container>
);

export default Header;
