import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus, FiSend } from 'react-icons/fi';
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
import CategoryItem from './InviteItem';
import Tooltip from '../../components/Tooltip';

interface IDevices {
  name: string;
}

interface IInvites {
  id: string;
  name: string;
  min_time: string;
  max_time: string;
  devices: IDevices[];
}

const Invite: React.FC = () => {
  const { selected } = useSuperunit();
  const [invites, setInvites] = useState<IInvites[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const superunitId = selected?.id;

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  async function handleDelete(id: string) {
    const deleteInvite = invites.find(category => category.id === id);

    await api.delete(
      `/superunities/${selected?.id}/invites/types/${deleteInvite?.id}`,
    );

    setInvites(oldInvite => oldInvite.filter(invite => invite.id !== id));
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      if (selected) {
        const response = await api.get(
          `/superunities/${superunitId}/invites/types`,
          { params: { page } },
        );

        if (!response) return;

        setInvites(response.data.data);

        setPage(response.data.page);

        setTotalPages(response.data.total_pages);
      }
      setLoading(false);
    }

    getData();
  }, [selected, page, superunitId]);

  return (
    <Layout>
      <Header title={{ value: 'Tipos de Convites', path: '/invites' }} />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiSend />
              Lista de tipos de Convites
              <Tooltip
                title='Você pode criar novos convites clicando no botão "adicionar convite".
                Convites podem ser editados ou excluídos ao clicar nos respectivos ícones na lista de categorias.'
                width={500}
                height={75}
                direction="down"
              />
            </h1>
          </div>
          <StyledButton
            icon={FiPlus}
            name="Tipos de Convites"
            onClick={() => history.push('/invites/new')}
          >
            Adicionar tipo de Convite
          </StyledButton>
        </MainHeader>
        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            {invites.length > 0 && (
              <ListItemsCategory>
                <div>Nome</div>
                <div>Horário</div>
                <div>Dispositivos</div>
                <div>Editar/Excluir</div>
              </ListItemsCategory>
            )}

            {invites.length > 0 ? (
              invites.map(invite => (
                <CategoryItem
                  key={invite.id}
                  id={invite.id}
                  name={invite.name || 'Não informado'}
                  min_time={invite.min_time || 'Não informado'}
                  max_time={invite.max_time || 'Não informado'}
                  devices={invite.devices.map(device => device.name)}
                  onClickDelete={() => handleDelete(invite.id)}
                />
              ))
            ) : (
              <p>Ainda não há tipos de convites registrados</p>
            )}
            {invites.length > 0 && (
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

export default Invite;
