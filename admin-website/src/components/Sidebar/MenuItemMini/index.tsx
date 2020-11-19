import React from 'react';

import { IconBaseProps } from 'react-icons';
import { Link, LinkProps } from 'react-router-dom';
import { Container } from './styles';

interface MenuItemMiniProps extends LinkProps {
  icon: React.ComponentType<IconBaseProps>;
  path: string;
  name: string;
}

const MenuItemMini: React.FC<MenuItemMiniProps> = ({
  path,
  to,
  name,
  icon: Icon,
}) => {
  return (
    <Link to={to}>
      <Container isSelected={path === to}>
        {Icon && <Icon size={27} />}
      </Container>
    </Link>
  );
};

export default MenuItemMini;
