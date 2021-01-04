/* eslint-disable no-constant-condition */
import React from 'react';
import { BiBuildingHouse } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { useSuperunit } from '../../../hooks/superunit';
import {
  Container,
  Content,
  Selected,
  SelectedInfo,
  Item,
  StyledLoading,
} from './styles';

const SuperUnitSelect: React.FC = () => {
  const { superunities, selected, selectSuperunit } = useSuperunit();

  return (
    <Container>
      <Selected>
        {!selected ? (
          <StyledLoading color="#0e0e2c" />
        ) : (
          <>
            <SelectedInfo>
              <div>
                <BiBuildingHouse size={20} />
              </div>
              <h1>{selected?.name}</h1>
            </SelectedInfo>
            <button type="button">
              <FiChevronDown color="#0e0e2c" size={24} />
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
