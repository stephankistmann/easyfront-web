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
              <p>12/15/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <p>Novo Leblon</p>
            <div />
            <p>Apt 203</p>
          </Unit>
          <Device>Portão 7</Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Stephan Jacob</h1>
              <p>12/15/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <p>Novo Leblon</p>
            <div />
            <p>Apt 203</p>
          </Unit>
          <Device>Portão 7</Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Stephan Jacob</h1>
              <p>12/15/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <p>Novo Leblon</p>
            <div />
            <p>Apt 203</p>
          </Unit>
          <Device>Portão 7</Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Stephan Jacob</h1>
              <p>12/15/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <p>Novo Leblon</p>
            <div />
            <p>Apt 203</p>
          </Unit>
          <Device>Portão 7</Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Stephan Jacob</h1>
              <p>12/15/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <p>Novo Leblon</p>
            <div />
            <p>Apt 203</p>
          </Unit>
          <Device>Portão 7</Device>
        </AccessItem>
        <AccessItem>
          <Infos>
            <InfoPicture>
              <FiArrowDownRight color="#5bb484" size={24} />
              <img src={defaultUserIcon} alt="User" />
            </InfoPicture>
            <InfoContent>
              <h1>Stephan Jacob</h1>
              <p>12/15/2020</p>
            </InfoContent>
          </Infos>
          <Unit>
            <p>Novo Leblon</p>
            <div />
            <p>Apt 203</p>
          </Unit>
          <Device>Portão 7</Device>
        </AccessItem>
      </Content>
    </Container>
  );
};

export default AccessLog;
