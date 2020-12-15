import React from 'react';
import {
  FiUnlock,
  FiTag,
  FiEdit3,
  FiTrash,
  FiChevronsRight,
} from 'react-icons/fi';
import { Container, Infos, Extra, Controllers } from './styles';

const AccessItem: React.FC = () => {
  return (
    <Container>
      <Infos>
        <FiChevronsRight />
        <div>
          <h1>Stephan Jacob</h1>
          <p>Novo Leblon</p>
        </div>
      </Infos>
      <Extra>
        <FiTag />
        <p>Proprietário - Apt 203</p>
      </Extra>
      <Controllers>
        <button type="button">
          <FiEdit3 />
        </button>
        <button type="button">
          <FiTrash />
        </button>
      </Controllers>
    </Container>
  );
};

export default AccessItem;
