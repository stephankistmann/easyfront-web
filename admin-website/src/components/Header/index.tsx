import React from 'react';
import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';
import {
  Container,
  UserContent,
  Navigation,
  DropdownContainer,
} from './styles';
import NavButton from '../NavButton';
import { useAuth } from '../../hooks/auth';
import LogoutButton from '../LogoutButton';
import SuperunitItem from '../SuperunitItem';
import DropdownMenu from '../DropdownMenu';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Navigation>
        <NavButton icon={FiChevronLeft} />
        <p>Peers - </p>
        <p> Create peer</p>
      </Navigation>
      <UserContent>
        <SuperunitItem icon={FiChevronDown} defaultSuperUnit={user.name}>
          <DropdownContainer>
            <DropdownMenu>{user.name}</DropdownMenu>
            <DropdownMenu>{user.name}</DropdownMenu>
            <DropdownMenu>{user.name}</DropdownMenu>
            <DropdownMenu>{user.name}</DropdownMenu>
          </DropdownContainer>
        </SuperunitItem>
        <LogoutButton />
      </UserContent>
    </Container>
  );
};

export default Header;
