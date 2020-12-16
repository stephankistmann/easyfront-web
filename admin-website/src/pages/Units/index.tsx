import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit, FiTrash, FiPlus, FiHome } from 'react-icons/fi';
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
import Pagination from '../../components/Pagination';
import { useSuperunit } from '../../hooks/superunit';
import api from '../../services/api';
import Layout from '../../Layouts';
import Header from '../../components/Header';

interface IUnit {
  id: string;
  name: string;
  public_area: string;
  superUnit_id: string;
}

const Units: React.FC = () => {
  const { selected } = useSuperunit();
  const [data, setData] = useState<IUnit[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteUnit = data.find(unit => unit.id === id);

    await api.delete(`/superunities/${selected?.id}/unities/${deleteUnit?.id}`);

    setData(oldData => oldData.filter(unit => unit.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(`/superunities/${selected.id}/unities`, {
          params: { page },
        });

        if (!response) return;
        setData(response.data.data);

        setPage(response.data.page);
        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    }

    getData();
  }, [selected, page]);

  return (
    <Layout>
      <Header
        title={{ value: 'Unidades', path: '/units' }}
        subTitle={{ value: 'Unidades', path: '/units' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiHome />
              Lista de Unidades
            </h1>
          </div>
          <StyledButton
            name="Unidades"
            icon={FiPlus}
            onClick={() => history.push('/units/new')}
          >
            Adicionar Unidade
          </StyledButton>
        </MainHeader>

        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            <ListItemsCategory>
              <span>Nome</span>
              <span>Area</span>
              <span>Superunit ID</span>
              <span>Editar/Excluir</span>
            </ListItemsCategory>
            {data.map(unit => (
              <ListItems key={unit.id}>
                <span>{unit.name}</span>
                <span>{unit.public_area}</span>
                <span>{unit.superUnit_id}</span>
                <div>
                  <Link to={`/units/edit/${unit.id}`}>
                    <FiEdit />
                  </Link>
                  <InvisibleButton
                    type="button"
                    onClick={() => handleDelete(unit.id)}
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

export default Units;
