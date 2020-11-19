import React from 'react';
import { FiUserPlus } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainAddPeer from '../../components/MainAddPeer';

const AddPeer: React.FC = () => (
  <Layout>
    <MainAddPeer name="Adicionar Parceiro" icon={FiUserPlus} />
  </Layout>
);

export default AddPeer;
