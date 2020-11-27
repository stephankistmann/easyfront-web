import React from 'react';
import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';
import {
  Container,
  UserContent,
  Navigation,
  DropdownContainer,
} from './styles';
import NavButton from '../NavButton';
import LogoutButton from '../LogoutButton';
import SuperunitItem from '../SuperunitItem';
import { useSuperunit } from '../../hooks/superunit';

const Header: React.FC = () => {
  const { superunities, selectSuperunit, selected } = useSuperunit();

  if (!selected) return <p>loading...</p>;

  return (
    <Container>
      <Navigation>
        <NavButton icon={FiChevronLeft} />
        <p>Peers - </p>
        <p> Create peer</p>
      </Navigation>
      <UserContent>
        <SuperunitItem icon={FiChevronDown} defaultSuperUnit={selected?.name}>
          <DropdownContainer>
            {superunities.map(superunit => (
              // <DropdownMenu>{superunit.name}</DropdownMenu>
              <button
                type="button"
                key={superunit.id}
                onClick={() => {
                  selectSuperunit(superunit.id);
                }}
              >
                {superunit.name}
              </button>
            ))}
          </DropdownContainer>
        </SuperunitItem>
        <LogoutButton />
      </UserContent>
    </Container>
  );
};

export default Header;
