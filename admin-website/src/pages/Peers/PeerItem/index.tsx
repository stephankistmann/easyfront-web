import React from 'react';
import { FiEdit3, FiTrash, FiFile, FiSmartphone } from 'react-icons/fi';
import { Container, Infos, Contact, Extra, Controllers } from './styles';
import defaultUserIcon from '../../../assets/defaultUserIcon.png';

const PeerItem: React.FC = () => {
  return (
    <Container>
      <Infos>
        <img src={defaultUserIcon} alt="User" />
        <div>
          <h1>Stephan Jacob</h1>
          <p>stephanjacob17@gmail.com</p>
        </div>
      </Infos>
      <Contact>
        <div>
          <FiSmartphone />
          <p>(21) 99371-5212</p>
        </div>
      </Contact>
      <Extra>
        <div>
          <FiFile />
          <h1>Masculino</h1>
          <div />
          <p>Pessoa Física</p>
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
