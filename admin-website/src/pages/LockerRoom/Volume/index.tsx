/* eslint-disable no-nested-ternary */
import React from 'react';
import { FiEdit3, FiTrash, FiCodepen, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Infos, Size, Controllers } from './styles';

interface IVolume {
  name: string;
  size: string;
  id: string;
}

interface VolumeItemProps {
  onClickDelete?: () => {};
  data: IVolume;
}

const Volume: React.FC<VolumeItemProps> = ({ data, onClickDelete }) => {
  const { name, size, id } = data;

  return (
    <Container>
      <Infos>
        <div>
          <FiCodepen />
          <h1>{name}</h1>
        </div>
      </Infos>
      <Size>
        <div>
          <FiLock />
          {size === 's' ? (
            <h1>Pequeno</h1>
          ) : size === 'm' ? (
            <h1>Médio</h1>
          ) : (
            <h1>Grande</h1>
          )}
        </div>
      </Size>
      <Controllers>
        {/* <Link to={`/lockerroom/edit/${id}`}>
          <FiEdit3 />
        </Link> */}
        <button type="button" onClick={onClickDelete}>
          <FiTrash />
        </button>
      </Controllers>
    </Container>
  );
};

export default Volume;
