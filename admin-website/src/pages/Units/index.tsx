import React from 'react';
import { FiHome } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainUnits from '../../components/MainUnits';

const Peers: React.FC = () => (
  <Layout>
    <MainUnits name="Unidades" icon={FiHome} />
  </Layout>
);

export default Peers;
