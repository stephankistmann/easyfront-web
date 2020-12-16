import React from 'react';
import Layout from '../../Layouts';
import { Container, Content } from './styles';
import AccessInfo from './AccessInfo';
import AccessLog from './AccessLog';
import Chart from './Chart';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Header
        title={{ value: 'Dashboard', path: '/dashboard' }}
        subTitle={{ value: 'Parceiros', path: '/peers' }}
        hasBackButton
      />
      <Container>
        <Content>
          <AccessInfo />
          <Chart />
        </Content>
        <AccessLog />
      </Container>
    </Layout>
  );
};

export default Dashboard;
