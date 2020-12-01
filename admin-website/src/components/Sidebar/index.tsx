import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FiBarChart,
  FiBookOpen,
  FiChevronsRight,
  FiHelpCircle,
  FiHome,
  FiList,
  FiMapPin,
  FiMenu,
  FiSettings,
  FiUser,
} from 'react-icons/fi';
import MenuItem from './MenuItem';
import MenuItemMini from './MenuItemMini';
import NavButton from '../NavButton';
import logoImg from '../../assets/logo.png';
import { Container, Menu } from './styles';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const path = `/${pathname.split('/')[1]}`;

  return (
    <Container>
      <a href="https://www.easyfront.live/">
        <img src={logoImg} alt="EasyFront" />
      </a>
      <p>MENU</p>
      <Menu>
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
          to="/acessess"
          name="Acessos"
          icon={FiChevronsRight}
        />
        <MenuItem path={path} to="/faq" name="FAQ" icon={FiHelpCircle} />
        <MenuItem
          path={path}
          to="/settings"
          name="Settings"
          icon={FiSettings}
        />
        <NavButton icon={FiMenu} />
      </Menu>
    </Container>
  );
};

export default Sidebar;
