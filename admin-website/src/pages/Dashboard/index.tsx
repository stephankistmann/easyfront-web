import React from 'react';
import Layout from '../../Layouts';
import { Container, Content } from './styles';
import AccessInfo from './AccessInfo';
import AccessLog from './AccessLog';
import Chart from './Chart';

const Dashboard: React.FC = () => {
  return (
    <Layout>
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
