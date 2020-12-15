import React from 'react';
import { FiLogIn, FiUserCheck, FiUserPlus, FiUsers } from 'react-icons/fi';
import { Container, Item } from './styles';

const AccessInfo: React.FC = () => {
  return (
    <Container>
      <Item style={{ backgroundColor: '#e4defe' }}>
        <h1>
          <FiLogIn />
          Acessos Totais
        </h1>
        <div>
          <p>3k</p>
        </div>
      </Item>
      <Item style={{ backgroundColor: '#e2f2ff' }}>
        <h1>
          <FiUsers />
          Acessos Semanais
        </h1>
        <div>
          <p>120</p>
        </div>
      </Item>
      <Item style={{ backgroundColor: '#ffdbd5 ' }}>
        <h1>
          <FiUserCheck />
          Convites ativos
        </h1>
        <div>
          <p>22</p>
        </div>
      </Item>
      <Item style={{ backgroundColor: '#e0f9e0' }}>
        <h1>
          <FiUserPlus />
          Convites hoje
        </h1>
        <div>
          <p>10</p>
        </div>
      </Item>
    </Container>
  );
};

export default AccessInfo;
