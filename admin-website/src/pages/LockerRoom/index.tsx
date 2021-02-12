import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus, FiCodepen } from 'react-icons/fi';
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
import Volume from './Volume';
import Tooltip from '../../components/Tooltip';

interface IVolume {
  id: string;
  name: string;
  size: string;
}

const LockerRoom: React.FC = () => {
  const { selected } = useSuperunit();
  const [volumes, setVolumes] = useState<IVolume[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteVolume = volumes.find(volume => volume.id === id);

    await api.delete(
      `/superunities/${selected?.id}/lockerroom/volumes/${deleteVolume?.id}`,
    );

    setVolumes(oldVolumes => oldVolumes.filter(volume => volume.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(
          `/superunities/${selected?.id}/lockerroom/volumes`,
          {
            params: { page },
          },
        );

        if (!response) return;

        setVolumes(response.data.data);

        setPage(response.data.page);

        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    }

    getData();
  }, [selected, page]);

  console.log(volumes);

  return (
    <Layout>
      <Header title={{ value: 'Volumes', path: '/volumes' }} />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiCodepen />
              Lista de Volumes
              <Tooltip
                title='
                Você pode criar novos volumes clicando no botão "adicionar volume".
                Volumes podem ser editadas ou excluídas ao clicar nos respectivos ícones na lista de volumes.'
                width={500}
                height={75}
                direction="down"
              />
            </h1>
          </div>
          <StyledButton
            name="Volumes"
            icon={FiPlus}
            onClick={() => history.push('/lockerroom/new')}
          >
            Adicionar Volume
          </StyledButton>
        </MainHeader>

        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            {volumes.length > 0 && (
              <ListItemsCategory>
                <div>Nome</div>
                <div>Tamanho</div>
                <div>Excluir</div>
              </ListItemsCategory>
            )}
            {volumes.length > 0 ? (
              volumes.map(volume => (
                <Volume
                  key={volume.id}
                  data={volume}
                  onClickDelete={() => handleDelete(volume.id)}
                />
              ))
            ) : (
              <p>Ainda não há volumes registrados</p>
            )}
            {volumes.length > 0 && (
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

export default LockerRoom;
