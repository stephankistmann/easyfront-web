import React from 'react';
import { IconBaseProps } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import { Container, Title, Search } from './styles';
import SearchBox from '../../SearchBox';

interface HeaderProps {
  icon: React.ComponentType<IconBaseProps>;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ icon: Icon, name }) => (
  <Container>
    <Title>
      {Icon && <Icon size={34} />}
      <h1>{name}</h1>
    </Title>
    <Search>
      <SearchBox icon={FiSearch} />
    </Search>
  </Container>
);

export default Header;
