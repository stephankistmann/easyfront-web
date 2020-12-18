import React from 'react';
import { FiEdit3, FiTrash, FiMapPin, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Infos, Area, Controllers } from './styles';

interface UnitItemProps {
  name: string;
  public_area: string;
  id: string;
  onClickDelete?: () => {};
}

const PeerItem: React.FC<UnitItemProps> = ({
  name,
  public_area,
  onClickDelete,
  id,
}) => {
  return (
    <Container>
      <Infos>
        <div>
          <FiMapPin />
          <h1>{name}</h1>
        </div>
      </Infos>
      <Area>
        <div>
          <FiHome />
          <h1>{public_area}</h1>
        </div>
      </Area>
      <Controllers>
        <Link to={`/units/edit/${id}`}>
          <FiEdit3 />
        </Link>
        <button type="button" onClick={onClickDelete}>
          <FiTrash />
        </button>
      </Controllers>
    </Container>
  );
};

export default PeerItem;
