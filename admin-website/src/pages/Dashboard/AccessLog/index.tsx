import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';
import { BiHistory } from 'react-icons/bi';
import defaultUserIcon from '../../../assets/defaultUserIcon.png';
import {
  Container,
  Header,
  Content,
  AccessItem,
  Infos,
  InfoPicture,
  InfoContent,
  Unit,
  Device,
} from './styles';

const AccessLog: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          <BiHistory />
          Histórico de Acessos
        </h1>
      </Header>
      <Content>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Stephan Jacob</h1>
              <p>15/12/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <div>
              <p>Millenium</p>
              <div />
              <p>Apt 201</p>
            </div>
          </Unit>
          <Device>
            <div>
              <p>Portão 2</p>
            </div>
          </Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Luam Menezes</h1>
              <p>14/12/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <div>
              <p>Nova Barra</p>
              <div />
              <p>Casa 60 - 1</p>
            </div>
          </Unit>
          <Device>
            <div>
              <p>Entrada 1</p>
            </div>
          </Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Renata Amorim</h1>
              <p>13/12/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <div>
              <p>Novo Leblon</p>
              <div />
              <p>Apt 203</p>
            </div>
          </Unit>
          <Device>
            <div>
              <p>Portaria</p>
            </div>
          </Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Janaina Castelo Branco</h1>
              <p>12/12/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <div>
              <p>Mansões</p>
              <div />
              <p>Casa 133</p>
            </div>
          </Unit>
          <Device>
            <div>
              <p>Portão 7</p>
            </div>
          </Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Vicenzo Menescal</h1>
              <p>11/12/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <div>
              <p>Novo Mundo</p>
              <div />
              <p>Apt 202</p>
            </div>
          </Unit>
          <Device>
            <div>
              <p>Academia</p>
            </div>
          </Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Isis Lima</h1>
              <p>10/12/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <div>
              <p>Sol da manhã</p>
              <div />
              <p>Apt 1404</p>
            </div>
          </Unit>
          <Device>
            <div>
              <p>Saída 2</p>
            </div>
          </Device>
        </AccessItem>
      </Content>
    </Container>
  );
};

export default AccessLog;
