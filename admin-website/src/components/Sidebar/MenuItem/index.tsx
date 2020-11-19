import React from 'react';

import { IconBaseProps } from 'react-icons';
import { Link, LinkProps } from 'react-router-dom';
import { Container } from './styles';

interface MenuItemProps extends LinkProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  path: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, to, name, icon: Icon }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Container isSelected={path === to}>
        {Icon && <Icon size={27} />}
        {name}
      </Container>
    </Link>
  );
};

export default MenuItem;
