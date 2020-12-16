import React, { useEffect, useState } from 'react';
import { FiPlus, FiEdit, FiTrash, FiChevronsRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../../Layouts';
import Pagination from '../../components/Pagination';
import { useSuperunit } from '../../hooks/superunit';
import api from '../../services/api';
import { InvisibleButton } from '../Units/styles';
import AccessItem from './AccessItem';
import {
  Container,
  List,
  ListItems,
  ListItemsCategory,
  StyledButton,
} from './styles';

interface IUser {
  id: string;
  name: string;
  phone: string;
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
  const history = useHistory();

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
        setTotalPages(response.data.total_pages);
      }
    }

    getData();
  }, [selected, page]);

  return (
    <Layout>
      <Container>
        <header>
          <h1>
            <FiChevronsRight />
            Lista de Acessos
          </h1>
          <StyledButton
            icon={FiPlus}
            name="Acessos"
            onClick={() => history.push('/access/new')}
          >
            Adicionar Acesso
          </StyledButton>
        </header>

        <List>
          <ListItemsCategory>
            <span>Parceiro / Super Unidade</span>
            <span>Categoria / Unidade</span>
            <span>Editar / Excluir</span>
          </ListItemsCategory>
          {/* {data.map(access => (
            <ListItems key={access.id}>
              <span>{access.user.name || 'null'}</span>
              <span>{access.user.phone || 'null'}</span>
              <span>{access.unit.name || 'null'}</span>
              <span>{access.accessCategory.name || 'null'}</span>
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
          ))} */}
          <AccessItem />
          <AccessItem />
          <AccessItem />
          <AccessItem />
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
