import React, { useEffect, useState } from 'react';
import { FiChevronsRight, FiEdit, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import MainHeaderButton from '../../components/MainHeaderButton';
import Pagination from '../../components/Pagination';
import { useSuperunit } from '../../hooks/superunit';
import api from '../../services/api';
import { InvisibleButton } from '../Units/styles';
import { Container, List, ListItems, ListItemsCategory } from './styles';

interface IUser {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  rg: string;
}

interface IUnit {
  id: string;
  name: string;
}

interface IAccessCategory {
  id: string;
  name: string;
}

interface IAccess {
  id: string;
  user: IUser;
  unit: IUnit;
  accessCategory: IAccessCategory;
}

const Access: React.FC = () => {
  const { selected } = useSuperunit();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState<IAccess[]>([]);

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteAccess = data.find(access => access.id === id);

    await api.delete(
      `/superunities/${selected?.id}/accesses/${deleteAccess?.id}`,
    );

    setData(oldData => oldData.filter(access => access.id !== id));
  }

  useEffect(() => {
    async function getData() {
      if (selected) {
        const response = await api.get(
          `/superunities/${selected.id}/accesses`,
          {
            params: { page },
          },
        );

        if (!response) return;
        setData(response.data.data);

        setPage(response.data.page);
        setTotalPages(response.data.total_pages);

        console.log(response.data.data);
      }
    }

    getData();
  }, [selected, page]);

  return (
    <Layout>
      <Container>
        <MainHeaderButton
          icon={FiChevronsRight}
          name="Acessos"
          buttonName="Adicionar Acesso"
          buttonLink="/access/new"
        />
        <List>
          <ListItemsCategory>
            <span>Parceiro</span>
            <span>Telefone</span>
            <span>Unidade</span>
            <span>Categoria</span>
            <span>CPF</span>
            <span>RG</span>
            <span>ID</span>
            <span>Editar/Excluir</span>
          </ListItemsCategory>
          {data.map(access => (
            <ListItems key={access.id}>
              <span>{access.user.name || 'null'}</span>
              <span>{access.user.phone || 'null'}</span>
              <span>{access.unit.name || 'null'}</span>
              <span>{access.accessCategory.name || 'null'}</span>
              <span>{access.user.cpf || 'null'}</span>
              <span>{access.user.rg || 'null'}</span>
              <span>{access.id || 'null'}</span>
              <div>
                <Link to={`/access/edit/${access.id}`}>
                  <FiEdit />
                </Link>
                <InvisibleButton
                  type="button"
                  onClick={() => handleDelete(access.id)}
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
      </Container>
    </Layout>
  );
};

export default Access;
