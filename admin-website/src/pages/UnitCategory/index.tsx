import React from 'react';
import { FiHome } from 'react-icons/fi';
import Layout from '../../components/Layout';
import MainUnitCategory from '../../components/MainUnitCategory';

const UnitCategory: React.FC = () => (
  <Layout>
    <MainUnitCategory name="Categoria" icon={FiHome} />
  </Layout>
);

export default UnitCategory;
