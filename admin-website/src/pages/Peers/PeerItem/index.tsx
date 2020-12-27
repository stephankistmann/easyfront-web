import React from 'react';
import { FiCheck, FiFile, FiSmartphone, FiX } from 'react-icons/fi';
import { Container, Infos, Contact, Extra, Status } from './styles';
import defaultUserIcon from '../../../assets/defaultUserIcon.png';

interface PeerItemProps {
  name: string;
  phone: string;
  email: string;
  gender: string;
  nature: string;
  id: string;
  active: boolean;
}

const PeerItem: React.FC<PeerItemProps> = ({
  name,
  phone,
  email,
  gender,
  nature,
  active,
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
      {active ? (
        <Status active={active}>
          <div>
            <FiCheck />
            <h1>Ativo</h1>
          </div>
        </Status>
      ) : (
        <Status active={active}>
          <div>
            <FiX />
            <h1>Inativo</h1>
          </div>
        </Status>
      )}
    </Container>
  );
};

export default PeerItem;
