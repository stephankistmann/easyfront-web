import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
}

const SelectContainer: React.FC<SelectProps> = ({
  children,
  icon: Icon,
  title,
  ...rest
}) => {
  return (
    <Container>
      <span>{title}</span>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
};

export default SelectContainer;
