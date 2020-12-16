import React from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container, Infos, Area, SuperUnit, Controllers } from './styles';

interface UnitItemProps {
  name: string;
  public_area: string;
  superunitId: string;
  onClickDelete?: () => {};
}

const PeerItem: React.FC<UnitItemProps> = ({
  name,
  public_area,
  superunitId,
  onClickDelete,
}) => {
  return (
    <Container>
      <Infos>
        <p>{name}</p>
      </Infos>
      <Area>
        <p>{public_area}</p>
      </Area>
      <SuperUnit>
        <p>{superunitId}</p>
      </SuperUnit>
      <Controllers>
        <button type="button">
          <FiEdit3 />
        </button>
        <button type="button" onClick={onClickDelete}>
          <FiTrash />
        </button>
      </Controllers>
    </Container>
  );
};

export default PeerItem;
