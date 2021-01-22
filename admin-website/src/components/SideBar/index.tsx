import React, { useCallback, useEffect, useState } from 'react';
import {
  FiUser,
  FiHome,
  FiList,
  FiChevronsRight,
  FiChevronLeft,
  FiBarChart,
  FiSend,
} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { Container, Logo, Title, Menu } from './styles';
import MenuItem from './MenuItem';
import OpenCloseButton from './OpenCloseButton';
import logo from '../../assets/logo.png';
import LogoutButton from './LogoutButton';

const SideBar: React.FC = () => {
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
        <MenuItem path={path} to="/peers" name="Usuários" icon={FiUser} />
        <MenuItem path={path} to="/units" name="Unidades" icon={FiHome} />
        <MenuItem
          path={path}
          to="/invites"
          name="Tipos de Convites"
          icon={FiSend}
        />
        <MenuItem path={path} to="/category" name="Categorias" icon={FiList} />
        <MenuItem
          path={path}
          to="/access"
          name="Acessos"
          icon={FiChevronsRight}
        />
        <LogoutButton />
      </Menu>
      <OpenCloseButton open={open} onClick={handleToggle}>
        <FiChevronLeft />
      </OpenCloseButton>
    </Container>
  );
};

export default SideBar;
