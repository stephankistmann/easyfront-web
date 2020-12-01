import React from 'react';
import { FiList } from 'react-icons/fi';
import Layout from '../../components/Layout';
import Category from '../../components/Category';

const UnitCategory: React.FC = () => (
  <Layout>
    <Category name="Categoria" icon={FiList} />
  </Layout>
);

export default UnitCategory;
