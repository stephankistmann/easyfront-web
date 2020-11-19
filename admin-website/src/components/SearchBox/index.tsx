import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface SearchBoxProps {
  icon: React.ComponentType<IconBaseProps>;
}
const SearchBox: React.FC<SearchBoxProps> = ({ icon: Icon }) => (
  <Container>
    {Icon && <Icon size={24} />}
    <input />
    <button type="button">Pesquisar</button>
  </Container>
);

export default SearchBox;
