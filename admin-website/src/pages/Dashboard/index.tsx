import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  FiLogIn,
  FiKey,
  FiUsers,
  FiUserPlus,
  FiUserCheck,
  FiBarChart,
} from 'react-icons/fi';
import Title from '../../components/Title';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import {
  Container,
  List,
  ListItems,
  ListItemsCategory,
  DataContainer,
  ChartContainer,
  DataContentBox,
} from './styles';
import DataContentContainer from '../../components/DataContentContainer';
import UserIcon from '../../assets/defaultUserIcon.png';

const MainDashboard: React.FC = ({ children }) => {
  const [chartData, setChartData] = useState({});
  const history = useHistory();

  const [page, setpage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => {
    setpage(updatePage);
    history.push(`/dashboard/${updatePage}`);
  };

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
    <Layout>
      <Container>
        <Title icon={FiBarChart} name="Dashboard" />
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
            <DataContentContainer
              icon={FiUserPlus}
              name="Convites enviados hoje"
            >
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
          <Pagination
            page={page}
            handlePagination={handlePages}
            totalPages={totalPages}
          />
        </List>
      </Container>
    </Layout>
  );
};

export default MainDashboard;
