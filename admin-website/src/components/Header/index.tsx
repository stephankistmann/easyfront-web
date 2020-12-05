import React from 'react';
import { FiChevronDown, FiChevronLeft, FiLoader } from 'react-icons/fi';
import {
  Container,
  UserContent,
  Navigation,
  DropdownContainer,
  SuperunitContainer,
  LoadingContainer,
} from './styles';
import NavButton from '../NavButton';
import LogoutButton from '../LogoutButton';
import SuperunitItem from '../SuperunitItem';
import { useSuperunit } from '../../hooks/superunit';
import Loading from '../Loading';

const Header: React.FC = () => {
  const { superunities, selectSuperunit, selected } = useSuperunit();

  if (!selected)
    return (
      <LoadingContainer>
        <Loading name="Loading..." icon={FiLoader} />
      </LoadingContainer>
    );

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
              <SuperunitContainer
                type="button"
                key={superunit.id}
                onClick={() => {
                  selectSuperunit(superunit.id);
                }}
              >
                {superunit.name}
              </SuperunitContainer>
            ))}
          </DropdownContainer>
        </SuperunitItem>
        <LogoutButton />
      </UserContent>
    </Container>
  );
};

export default Header;
