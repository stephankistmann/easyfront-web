/* eslint-disable */
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { FiChevronRight, FiSearch, FiUsers, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Container,
  MainHeader,
  Search,
  List,
  ListItemsCategory,
  StyledLoading,
  StyledButton,
} from './styles';
import useDebounce from '../../hooks/debounce';
import api from '../../services/api';
import Pagination from '../../components/Pagination';
import Layout from '../../Layouts';
import Header from '../../components/Header';
import PeerItem from './PeerItem';

interface IPeer {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  rg: string;
  gender: string;
  nature: string;
}

const Peers: React.FC = () => {
  const [peers, setPeers] = useState<IPeer[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const showResetSearch = useMemo(() => search.length > 2, [search]);

  const debouncedSearch = useDebounce(search, 500);

  const handleResetSearch = useCallback(() => {
    setSearch('');
  }, [setSearch]);

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const params = { page };

      if (debouncedSearch.length > 2) {
        Object.assign(params, { search: debouncedSearch });
      }

      const response = await api.get('/users', { params });

      if (!response) return;

      setPeers(response.data.data);

      setPage(response.data.page);

      setTotalPages(response.data.total_pages);

      setLoading(false);
    }

    getData();
  }, [page, debouncedSearch]);

  return (
    <Layout>
      <Header
        title={{ value: 'Parceiros', path: '/peers' }}
        subTitle={{ value: 'Parceiros', path: '/peers' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiUsers />
            Lista de Parceiros
          </h1>

          <div>
            <Search>
              <FiSearch size={20} />
              <input
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Pesquisar por nome ou e-mail"
              />
              {showResetSearch && (
                <button type="button" onClick={handleResetSearch}>
                  <FiX size={20} />
                </button>
              )}
            </Search>
            <StyledButton
              name="Parceiros"
              icon={FiChevronRight}
              onClick={() => history.push('/peers/new')}
            >
              Adicionar Parceiro
            </StyledButton>
          </div>
        </MainHeader>

        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            <ListItemsCategory>
              <div>Nome</div>
              <div>Contato</div>
              <div>Gênero / Natureza</div>
              <div>Editar / Excluir</div>
            </ListItemsCategory>
            {peers.map(peer => (
              <PeerItem
                key={peer.id}
                name={peer.name || 'null'}
                phone={peer.phone || 'null'}
                email={peer.email || 'null'}
                gender={peer.gender || 'null'}
                nature={peer.nature || 'null'}
              />
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

export default Peers;
