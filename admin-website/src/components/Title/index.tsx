import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface TitleProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Title: React.FC<TitleProps> = ({ name, icon: Icon }) => (
  <Container>
    {Icon && <Icon size={26} />}
    <h1>{name}</h1>
  </Container>
);

export default Title;
