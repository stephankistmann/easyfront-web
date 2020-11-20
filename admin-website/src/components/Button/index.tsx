import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  loading,
  name,
  ...rest
}) => (
  <Container type="button" name={name} {...rest}>
    {Icon && <Icon size={24} />}
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
