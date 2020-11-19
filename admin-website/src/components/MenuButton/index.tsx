import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface MenuButtonProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const MenuButton: React.FC<MenuButtonProps> = ({ name, icon: Icon }) => {
  return <Container>{Icon && <Icon size={24} />}</Container>;
};

export default MenuButton;
