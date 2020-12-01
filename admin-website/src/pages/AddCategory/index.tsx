import React from 'react';
import { FiFolder } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainAddUnitCategory from '../../components/MainAddUnitCategory';

const AddUnitCategory: React.FC = () => (
  <Layout>
    <MainAddUnitCategory name="Adicionar categoria" icon={FiFolder} />
  </Layout>
);

export default AddUnitCategory;
