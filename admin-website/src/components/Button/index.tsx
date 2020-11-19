import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  loading,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {Icon && <Icon size={24} />}
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
