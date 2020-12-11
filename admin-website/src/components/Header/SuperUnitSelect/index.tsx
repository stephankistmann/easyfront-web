import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useSuperunit } from '../../../hooks/superunit';
import { Container, Content, Selected, Item } from './styles';

const SuperUnitSelect: React.FC = () => {
  const { superunities, selected, selectSuperunit } = useSuperunit();

  return (
    <Container>
      <Selected>
        {false ? (
          <p>loading...</p>
        ) : (
          <>
            <div>
              <h1>{selected?.name}</h1>
            </div>
            <button type="button">
              <FiChevronDown color="#fff" size={24} />
            </button>
          </>
        )}
      </Selected>
      <Content>
        {superunities.map(superunit => (
          <Item
            key={superunit.id}
            onClick={() => selectSuperunit(superunit.id)}
          >
            <h1>{superunit.name}</h1>
          </Item>
        ))}
      </Content>
    </Container>
  );
};

export default SuperUnitSelect;
