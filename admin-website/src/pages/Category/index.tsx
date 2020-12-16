import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit, FiPlus, FiTrash, FiUsers } from 'react-icons/fi';
import Pagination from '../../components/Pagination';
import {
  Container,
  MainHeader,
  List,
  ListItems,
  ListItemsCategory,
  InvisibleButton,
  StyledButton,
  StyledLoading,
} from './styles';
import Layout from '../../Layouts';
import api from '../../services/api';
import { useSuperunit } from '../../hooks/superunit';
import Header from '../../components/Header';

interface IDevices {
  name: string;
}

interface ICategories {
  id: string;
  name: string;
  min_time: string;
  max_time: string;
  devices: IDevices[];
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { selected } = useSuperunit();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const superunitId = selected?.id;

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteCategory = categories.find(category => category.id === id);

    await api.delete(
      `/superunities/${selected?.id}/accesscategories/${deleteCategory?.id}`,
    );

    setCategories(oldCategory =>
      oldCategory.filter(category => category.id !== id),
    );
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(
          `/superunities/${superunitId}/accesscategories`,
          { params: { page } },
        );

        if (!response) return;

        setCategories(response.data.data);

        setPage(response.data.page);

        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    }

    getData();
  }, [selected, page, superunitId]);

  return (
    <Layout>
      <Header
        title={{ value: 'Categorias', path: '/category' }}
        subTitle={{ value: 'Categorias', path: '/category' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiUsers />
              Lista de Categorias
            </h1>
          </div>
          <StyledButton
            icon={FiPlus}
            name="Categorias"
            onClick={() => history.push('/category/new')}
          >
            Adicionar Acesso
          </StyledButton>
        </MainHeader>
        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            <ListItemsCategory>
              <span>Nome</span>
              <span>Horário de inicio</span>
              <span>Horário de término</span>
              <span>Dispositivos</span>
              <span>Editar/Excluir</span>
            </ListItemsCategory>
            {categories.map(category => (
              <ListItems key={category.id}>
                <span>{category.name || null}</span>
                <span>{category.min_time || null}</span>
                <span>{category.max_time || null}</span>
                <div>
                  {category.devices.map(device => (
                    <div>{device.name || null}</div>
                  ))}
                </div>
                <div className="buttonsDiv">
                  <Link to={`/category/edit/${category.id}`}>
                    <FiEdit />
                  </Link>
                  <InvisibleButton
                    type="button"
                    onClick={() => handleDelete(category.id)}
                  >
                    <FiTrash />
                  </InvisibleButton>
                </div>
              </ListItems>
            ))}
            <Pagination
              page={page}
              handlePagination={handlePages}
              totalPages={totalPages}
            />
          </List>
        )}
      </Container>
    </Layout>
  );
};

export default Category;
