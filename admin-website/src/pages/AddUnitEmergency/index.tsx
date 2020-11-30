import React from 'react';
import { FiHome } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainAddUnitEmergency from '../../components/MainAddUnitEmergency';

const AddUnit: React.FC = () => (
  <Layout>
    <MainAddUnitEmergency name="Adicionar Unidade" icon={FiHome} />
  </Layout>
);

export default AddUnit;
