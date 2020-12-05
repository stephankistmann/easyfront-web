import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface LoadingProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Loading: React.FC<LoadingProps> = ({ name, icon: Icon }) => (
  <Container>
    {Icon && <Icon size={20} />}
    {name}
  </Container>
);

export default Loading;
