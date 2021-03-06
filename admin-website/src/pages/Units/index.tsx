import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus, FiHome } from 'react-icons/fi';
import {
  Container,
  MainHeader,
  List,
  ListItemsCategory,
  StyledButton,
  StyledLoading,
} from './styles';
import Pagination from '../../components/Pagination';
import { useSuperunit } from '../../hooks/superunit';
import api from '../../services/api';
import Layout from '../../Layouts/Default';
import Header from '../../components/Header';
import UnitItem from './UnitItem';
import Tooltip from '../../components/Tooltip';

interface IUnit {
  id: string;
  name: string;
  public_area: string;
}

const Units: React.FC = () => {
  const { selected } = useSuperunit();
  const [unities, setUnities] = useState<IUnit[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteUnit = unities.find(unit => unit.id === id);

    await api.delete(`/superunities/${selected?.id}/unities/${deleteUnit?.id}`);

    setUnities(oldUnities => oldUnities.filter(unit => unit.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(
          `/superunities/${selected?.id}/unities`,
          {
            params: { page },
          },
        );

        if (!response) return;

        setUnities(response.data.data);

        setPage(response.data.page);

        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    }

    getData();
  }, [selected, page, selected]);

  return (
    <Layout>
      <Header title={{ value: 'Unidades', path: '/units' }} />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiHome />
              Lista de Unidades
              <Tooltip
                title='
                Voc?? pode criar novas unidades clicando no bot??o "adicionar unidade".
                Unidades podem ser editadas ou exclu??das ao clicar nos respectivos ??cones na lista de acessos.'
                width={532}
                height={90}
                direction="down"
              />
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
            {unities.length > 0 && (
              <ListItemsCategory>
                <div>Nome</div>
                <div>Area</div>
                <div>Editar / Excluir</div>
              </ListItemsCategory>
            )}
            {unities.length > 0 ? (
              unities.map(unit => (
                <UnitItem
                  key={unit.id}
                  name={unit.name || 'N??o informado'}
                  public_area={unit.public_area || 'N??o informado'}
                  id={unit.id}
                  onClickDelete={() => handleDelete(unit.id)}
                />
              ))
            ) : (
              <p>Ainda n??o h?? unidades registradas</p>
            )}
            {unities.length > 0 && (
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

export default Units;
