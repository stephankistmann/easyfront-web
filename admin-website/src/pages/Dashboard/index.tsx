import React from 'react';
import { FiBarChart } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainDashboard from '../../components/MainDashboard';

const Dashboard: React.FC = () => (
  <Layout>
    <MainDashboard name="Dashboard" icon={FiBarChart} />
  </Layout>
);

export default Dashboard;
