import React, { useEffect, useState } from 'react';
import { FiPlus, FiChevronsRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Layout from '../../Layouts/Default';
import Pagination from '../../components/Pagination';
import { useSuperunit } from '../../hooks/superunit';
import api from '../../services/api';
import AccessItem from './AccessItem';
import {
  Container,
  MainHeader,
  List,
  ListItemsCategory,
  StyledButton,
} from './styles';
import Header from '../../components/Header';
import Tooltip from '../../components/Tooltip';

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
  const [accesses, setAccesses] = useState<IAccess[]>([]);
  const history = useHistory();

  const superUnitId = selected?.id;

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteAccess = accesses.find(acce => acce.id === id);

    await api.delete(
      `/superunities/${selected?.id}/accesses/${deleteAccess?.id}`,
    );

    setAccesses(oldAccesses => oldAccesses.filter(acce => acce.id !== id));
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
        setAccesses(response.data.data);
        setTotalPages(response.data.total_pages);
      }
    }

    getData();
  }, [selected, page, superUnitId]);

  return (
    <Layout>
      <Header title={{ value: 'Acessos', path: '/access' }} />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiChevronsRight />
              Lista de Acessos
              <Tooltip
                title="Teste de largura do container"
                width={250}
                height={40}
                direction="down"
              />
            </h1>
          </div>
          <StyledButton
            icon={FiPlus}
            name="Acessos"
            onClick={() => history.push('/access/new')}
          >
            Adicionar Acesso
          </StyledButton>
        </MainHeader>

        <List>
          {accesses.length > 0 && (
            <ListItemsCategory>
              <div>Parceiro</div>
              <div>Categoria / Unidade</div>
              <div>Editar / Excluir</div>
            </ListItemsCategory>
          )}
          {accesses.length > 0 ? (
            accesses.map(acces => (
              <AccessItem
                key={acces.id}
                id={acces.id}
                name={acces.user?.name || 'Não informado'}
                unit={acces.unit.name || 'Não informado'}
                category={acces.accessCategory.name || 'Não informado'}
                onClickDelete={() => handleDelete(acces.id)}
              />
            ))
          ) : (
            <p>Ainda não há accessos registrados</p>
          )}
          {accesses.length > 0 && (
            <Pagination
              page={page}
              handlePagination={handlePages}
              totalPages={totalPages}
            />
          )}
        </List>
      </Container>
    </Layout>
  );
};

export default Access;
