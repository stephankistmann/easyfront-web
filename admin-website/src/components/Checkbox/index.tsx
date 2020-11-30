import React from 'react';
import { Container } from './styles';
import Label from '../Label';

interface CheckboxProps {
  name: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, id }) => (
  <Label name={id}>
    <Container type="checkbox" name={name} id={id} />
  </Label>
);

export default Checkbox;
