/* eslint-disable no-nested-ternary */
import React from 'react';
import { FiClock, FiEdit3, FiTrash, FiTablet, FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Infos, Schedule, Devices, Controllers } from './styles';

interface InviteItemProps {
  id: string;
  name: string;
  min_time: string;
  max_time: string;
  devices: string[];
  onClickDelete?: () => {};
}

const CategoryItem: React.FC<InviteItemProps> = ({
  id,
  name,
  min_time,
  max_time,
  devices,
  onClickDelete,
}) => {
  const min_timeMasked = min_time.slice(0, -3);
  const max_timeMasked = max_time.slice(0, -3);

  return (
    <Container>
      <Infos>
        <div>
          <FiSend />
          <h1>{name}</h1>
        </div>
      </Infos>
      <Schedule>
        <div>
          <FiClock />
          <p>{min_timeMasked}</p>
          <div />
          <p>{max_timeMasked}</p>
        </div>
      </Schedule>
      <Devices>
        {devices.length > 2 ? (
          // eslint-disable-next-line react/jsx-indent
          <div>
            <FiTablet />
            <p>{devices[0]}</p>
            <p>, &nbsp;</p>
            <p>{devices[1]}</p>
            <p>...</p>
            <p>.</p>
          </div>
        ) : devices.length > 1 ? (
          <div>
            <FiTablet />
            {devices.map(device => (
              <>
                <p>{device}</p>
                <p>,&nbsp;</p>
              </>
            ))}
          </div>
        ) : (
          <div>
            <FiTablet />
            {devices.map(device => (
              <>
                <p>{device}</p>
                <p>.</p>
              </>
            ))}
          </div>
        )}
      </Devices>
      <Controllers>
        <Link to={`/invites/edit/${id}`}>
          <FiEdit3 />
        </Link>
        <button type="button" onClick={onClickDelete}>
          <FiTrash />
        </button>
      </Controllers>
    </Container>
  );
};

export default CategoryItem;
