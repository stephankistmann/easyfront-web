import React, { useState } from 'react';
import {
  FiEdit3,
  FiTrash,
  FiMapPin,
  FiHome,
  FiPackage,
  FiLock,
  FiArrowDown,
  FiActivity,
} from 'react-icons/fi';
import {
  Container,
  Content,
  Infos,
  InfosContent,
  Status,
  Volume,
  ExpandControl,
  Events,
  Event,
  Line,
  Ball,
} from './styles';
import { IDelivery } from '../index';

interface DeliveryProps {
  delivery: IDelivery;
}

const Delivery: React.FC<DeliveryProps> = ({ delivery }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { volume, unit, status, id, events } = delivery;

  console.log(events);

  return (
    <Container>
      <Content>
        <Infos>
          <FiHome />
          <InfosContent>
            <h1>{unit.name}</h1>
            <p>{id.slice(0, 8)}</p>
          </InfosContent>
        </Infos>
        <Status>
          <div>
            <FiActivity />
            <h1>{status}</h1>
          </div>
        </Status>
        <Volume>
          <div>
            <FiLock />
            <h1>{volume.name}</h1>
          </div>
        </Volume>
        <ExpandControl
          expanded={expanded}
          onClick={() => setExpanded(oldExpanded => !oldExpanded)}
        >
          <FiArrowDown />
        </ExpandControl>
      </Content>

      <Events expanded={expanded} childNumber={events.length}>
        {events.map(event => (
          <Event key={event.id}>
            <Line />
            <Ball />
            <p>{event.text_pt}</p>
          </Event>
        ))}
      </Events>
    </Container>
  );
};

export default Delivery;
