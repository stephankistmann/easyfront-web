import React from 'react';
import { FiHome } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainAddUnit from '../../components/MainAddUnit';

const AddUnit: React.FC = () => (
  <Layout>
    <MainAddUnit name="Adicionar Unidade" icon={FiHome} />
  </Layout>
);

export default AddUnit;
