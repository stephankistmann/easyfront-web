import React, { useCallback, useEffect, useState } from 'react';
import {
  FiUser,
  FiHome,
  FiList,
  FiChevronsRight,
  FiChevronLeft,
  FiBarChart,
} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { Container, Logo, Title, Menu, OpenButton } from './styles';
import MenuItem from './MenuItem';
import logo from '../../assets/logo.png';

const SideMenu: React.FC = () => {
  const [open, setOpen] = useState(() => {
    const menuState = localStorage.getItem('@Easyfront:menuState');
    return menuState ? menuState === 'true' : true;
  });

  const { pathname } = useLocation();

  const path = `/${pathname.split('/')[1]}`;

  const handleToggle = useCallback(() => setOpen(oldOpen => !oldOpen), []);

  useEffect(() => {
    localStorage.setItem('@Easyfront:menuState', `${open}`);
  }, [open]);

  return (
    <Container open={open}>
      <Logo open={open}>
        <img src={logo} alt="logo" />
      </Logo>
      <Title open={open}>MENU</Title>
      <Menu open={open}>
        <MenuItem
          path={path}
          to="/dashboard"
          name="Dashboard"
          icon={FiBarChart}
        />
        <MenuItem path={path} to="/peers" name="Parceiros" icon={FiUser} />
        <MenuItem path={path} to="/units" name="Unidades" icon={FiHome} />
        <MenuItem path={path} to="/category" name="Categorias" icon={FiList} />
        <MenuItem
          path={path}
          to="/access"
          name="Acessos"
          icon={FiChevronsRight}
        />
      </Menu>
      <OpenButton open={open} onClick={handleToggle}>
        <FiChevronLeft />
      </OpenButton>
    </Container>
  );
};

export default SideMenu;
