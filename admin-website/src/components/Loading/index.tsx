import React, { HTMLAttributes } from 'react';
import { FiLoader } from 'react-icons/fi';
import { Container } from './styles';

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number;
}

const Loading: React.FC<LoadingProps> = ({
  children,
  color = '#fff',
  size = 24,
  ...rest
}) => (
  <Container {...rest}>
    <FiLoader color={color} size={size} />
    {children}
  </Container>
);

export default Loading;
