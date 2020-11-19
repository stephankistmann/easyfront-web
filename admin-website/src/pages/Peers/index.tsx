import React from 'react';
import { FiUser } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainPeers from '../../components/MainPeers';

const Peers: React.FC = () => (
  <Layout>
    <MainPeers name="Parceiros" icon={FiUser} />
  </Layout>
);

export default Peers;
