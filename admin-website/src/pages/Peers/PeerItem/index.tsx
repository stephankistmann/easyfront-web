import React from 'react';
import { FiEdit3, FiTrash, FiFile, FiSmartphone } from 'react-icons/fi';
import { Container, Infos, Contact, Extra, Controllers } from './styles';
import defaultUserIcon from '../../../assets/defaultUserIcon.png';

interface PeerItemProps {
  name: string;
  phone: string;
  email: string;
  gender: string;
  nature: string;
}

const PeerItem: React.FC<PeerItemProps> = ({
  name,
  phone,
  email,
  gender,
  nature,
}) => {
  const phoneMasked = phone
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');

  return (
    <Container>
      <Infos>
        <img src={defaultUserIcon} alt="User" />
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </Infos>
      <Contact>
        <div>
          <FiSmartphone />
          <p>{phoneMasked}</p>
        </div>
      </Contact>
      <Extra>
        <div>
          <FiFile />
          <h1>{gender}</h1>
          <div />
          <p>{nature}</p>
        </div>
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

export default PeerItem;
