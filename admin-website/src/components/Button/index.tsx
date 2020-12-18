import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import Loading from '../Loading';

import { Container, IconContent } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  name?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  loading,
  name,
  ...rest
}) => (
  <Container type="button" name={name} {...rest}>
    {children}
    <IconContent>
      {loading ? <Loading /> : Icon && <Icon size={20} />}
    </IconContent>
  </Container>
);

export default Button;
