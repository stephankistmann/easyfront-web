import React, { useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Line } from 'react-chartjs-2';
import {
  FiChevronLeft,
  FiChevronRight,
  FiLogIn,
  FiKey,
  FiUsers,
  FiUserPlus,
  FiUserCheck,
} from 'react-icons/fi';
import {
  Container,
  List,
  ListItems,
  ListItemsCategory,
  Pagination,
  DataContainer,
  ChartContainer,
  DataContentBox,
} from './styles';
import Header from './Header';
import NavButton from '../NavButton';
import DataContentContainer from '../DataContentContainer';
import NavPage from '../NavPage';
import UserIcon from '../../assets/defaultUserIcon.png';

interface MainDashboardProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ name, icon: Icon }) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
      ],
      datasets: [
        {
          label: 'Acesso compartilhado',
          data: [32, 45, 12, 76, 68, 90, 20],
          backgroundColor: ['rgba(255, 103, 87, 0.2)'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Container>
      <Header name={name} icon={Icon} />
      <DataContainer>
        <ChartContainer>
          <Line
            data={chartData}
            options={{
              responsive: true,
            }}
          />
        </ChartContainer>
        <DataContentBox>
          <DataContentContainer icon={FiLogIn} name="Acessos totais">
            <span>9.999.999</span>
          </DataContentContainer>
          <DataContentContainer icon={FiKey} name="Acessos compartilhados">
            <span>999.999</span>
          </DataContentContainer>
          <DataContentContainer icon={FiUserPlus} name="Convites enviados hoje">
            <span>999</span>
          </DataContentContainer>
          <DataContentContainer icon={FiUserCheck} name="Convites ativos">
            <span>99</span>
          </DataContentContainer>
          <DataContentContainer icon={FiUsers} name="Convites semanais">
            <span>999.999</span>
          </DataContentContainer>
        </DataContentBox>
      </DataContainer>

      <List>
        <ListItemsCategory>
          <span>Foto</span>
          <span>Nome</span>
          <span>Unidade</span>
          <span>Categoria</span>
          <span>Ponto de acesso</span>
          <span>Permissão</span>
          <span>Dispositivo</span>
          <span>Tipo de acesso</span>
          <span>Data</span>
        </ListItemsCategory>
        <ListItems>
          <img src={UserIcon} alt="User Icon" />
          <span>Stephan Kistmann Jacob</span>
          <span>Novo Leblon</span>
          <span>Administrador</span>
          <span>Portão principal</span>
          <span>Acesso compartilhado</span>
          <span>Smartphone</span>
          <span>Entrada</span>
          <span>11/19/2020 - 12:38:33</span>
        </ListItems>
        <ListItems>
          <img src={UserIcon} alt="User Icon" />
          <span>Stephan Kistmann Jacob</span>
          <span>Novo Leblon</span>
          <span>Administrador</span>
          <span>Portão principal</span>
          <span>Acesso compartilhado</span>
          <span>Smartphone</span>
          <span>Entrada</span>
          <span>11/19/2020 - 12:38:33</span>
        </ListItems>
        <ListItems>
          <img src={UserIcon} alt="User Icon" />
          <span>Stephan Kistmann Jacob</span>
          <span>Novo Leblon</span>
          <span>Administrador</span>
          <span>Portão principal</span>
          <span>Acesso compartilhado</span>
          <span>Smartphone</span>
          <span>Entrada</span>
          <span>11/19/2020 - 12:38:33</span>
        </ListItems>
        <ListItems>
          <img src={UserIcon} alt="User Icon" />
          <span>Stephan Kistmann Jacob</span>
          <span>Novo Leblon</span>
          <span>Administrador</span>
          <span>Portão principal</span>
          <span>Acesso compartilhado</span>
          <span>Smartphone</span>
          <span>Entrada</span>
          <span>11/19/2020 - 12:38:33</span>
        </ListItems>
        <ListItems>
          <img src={UserIcon} alt="User Icon" />
          <span>Stephan Kistmann Jacob</span>
          <span>Novo Leblon</span>
          <span>Administrador</span>
          <span>Portão principal</span>
          <span>Acesso compartilhado</span>
          <span>Smartphone</span>
          <span>Entrada</span>
          <span>11/19/2020 - 12:38:33</span>
        </ListItems>
        <ListItems>
          <img src={UserIcon} alt="User Icon" />
          <span>Stephan Kistmann Jacob</span>
          <span>Novo Leblon</span>
          <span>Administrador</span>
          <span>Portão principal</span>
          <span>Acesso compartilhado</span>
          <span>Smartphone</span>
          <span>Entrada</span>
          <span>11/19/2020 - 12:38:33</span>
        </ListItems>
        <Pagination>
          <NavButton icon={FiChevronLeft} />
          <NavPage>
            <span>1</span>
          </NavPage>
          <NavButton icon={FiChevronRight} />
        </Pagination>
      </List>
    </Container>
  );
};

export default MainDashboard;
