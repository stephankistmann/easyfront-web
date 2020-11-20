import React from 'react';
import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';
import { Container, UserContent, Navigation } from './styles';
import NavButton from '../NavButton';
import { useAuth } from '../../hooks/auth';
import LogoutButton from '../LogoutButton';
import SelectButton from '../SelectButton';

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
        <SelectButton name="SelectButton" icon={FiChevronDown}>
          {user.name}
        </SelectButton>
        <LogoutButton />
      </UserContent>
    </Container>
  );
};

export default Header;
