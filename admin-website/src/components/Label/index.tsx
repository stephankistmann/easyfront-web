import React from 'react';
import { Container } from './styles';

interface LabelProps {
  name: string;
}

const Label: React.FC<LabelProps> = ({ name, children }) => (
  <Container htmlFor={name}>
    {name}
    {children}
  </Container>
);

export default Label;
