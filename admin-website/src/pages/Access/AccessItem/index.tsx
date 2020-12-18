import React from 'react';
import { FiTag, FiEdit3, FiTrash, FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Infos, Extra, Controllers } from './styles';

interface AccessItemProps {
  id: string;
  name: string;
  superUnit: string;
  unit: string;
  category: string;
  onClickDelete?: () => {};
}

const AccessItem: React.FC<AccessItemProps> = ({
  id,
  name,
  superUnit,
  unit,
  category,
  onClickDelete,
}) => {
  return (
    <Container>
      <Infos>
        <FiChevronsRight />
        <div>
          <h1>{name}</h1>
          <p>{superUnit}</p>
        </div>
      </Infos>
      <Extra>
        <FiTag />
        <p>{`${category} - ${unit}`}</p>
      </Extra>
      <Controllers>
        <Link to={`/access/edit/${id}`}>
          <FiEdit3 />
        </Link>
        <button type="button" onClick={onClickDelete}>
          <FiTrash />
        </button>
      </Controllers>
    </Container>
  );
};

export default AccessItem;
