import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface SelectButtonProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  children,
  icon: Icon,
}) => {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      {children}
    </Container>
  );
};

export default SelectButton;
