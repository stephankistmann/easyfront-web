import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
import Label from '../Label';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, id }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Label name={name}>
      <Container type="checkbox" id={id} />
    </Label>
  );
};

export default Checkbox;
