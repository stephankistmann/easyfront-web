import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiList, FiPlus } from 'react-icons/fi';
import Pagination from '../../components/Pagination';
import {
  Container,
  MainHeader,
  List,
  ListItemsCategory,
  StyledButton,
  StyledLoading,
} from './styles';
import Layout from '../../Layouts/Default';
import api from '../../services/api';
import { useSuperunit } from '../../hooks/superunit';
import Header from '../../components/Header';
import CategoryItem from './CategoryItem';
import Tooltip from '../../components/Tooltip';

interface IInvites {
  name: string;
}

interface IDevices {
  name: string;
}

interface ICategories {
  id: string;
  name: string;
  min_time: string;
  max_time: string;
  devices: IDevices[];
  inviteTypes: IInvites[];
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { selected } = useSuperunit();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteCategory = categories.find(category => category.id === id);

    await api.delete(
      `/superunities/${selected?.id}/accesses/categories/${deleteCategory?.id}`,
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
          `/superunities/${selected?.id}/accesses/categories`,
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
  }, [selected, page, selected?.id]);

  return (
    <Layout>
      <Header title={{ value: 'Categorias', path: '/category' }} />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiList />
              Lista de Categorias
              <Tooltip
                title='Você pode criar novas categorias clicando no botão "adicionar categoria".
                Categorias podem ser editadas ou excluídas ao clicar nos respectivos ícones na lista de categorias.'
                width={500}
                height={75}
                direction="down"
              />
            </h1>
          </div>
          <StyledButton
            icon={FiPlus}
            name="Categorias"
            onClick={() => history.push('/category/new')}
          >
            Adicionar Categoria
          </StyledButton>
        </MainHeader>
        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            {categories.length > 0 && (
              <ListItemsCategory>
                <div>Nome</div>
                <div>Horário</div>
                <div>Dispositivos</div>
                <div>Tipos de convite</div>
                <div>Editar/Excluir</div>
              </ListItemsCategory>
            )}

            {categories.length > 0 ? (
              categories.map(category => (
                <CategoryItem
                  key={category.id}
                  id={category.id}
                  name={category.name || 'Não informado'}
                  min_time={category.min_time || 'Não informado'}
                  max_time={category.max_time || 'Não informado'}
                  devices={
                    category.devices.map(device => device.name) ||
                    'Não informado'
                  }
                  inviteTypesIds={
                    category.inviteTypes.map(inviteType => inviteType.name) ||
                    'Não informado'
                  }
                  onClickDelete={() => handleDelete(category.id)}
                />
              ))
            ) : (
              <p>Ainda não há categorias registradas</p>
            )}
            {categories.length > 0 && (
              <Pagination
                page={page}
                handlePagination={handlePages}
                totalPages={totalPages}
              />
            )}
          </List>
        )}
      </Container>
    </Layout>
  );
};

export default Category;
