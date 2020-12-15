/* eslint-disable */
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { FiChevronRight, FiSearch, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Header,
  Search,
  List,
  ListItems,
  ListItemsCategory,
  StyledLoading,
} from './styles';
import useDebounce from '../../hooks/debounce';
import Button from '../../components/Button';
import api from '../../services/api';
import Pagination from '../../components/Pagination';
import Layout from '../../Layouts';

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
      <Container>
        <Header>
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
          <Button
            name="Parceiros"
            icon={FiChevronRight}
            onClick={() => history.push('/peers/new')}
          >
            Adicionar Parceiro
          </Button>
        </Header>

        {loading ? (
          <StyledLoading />
        ) : (
          <List>
            <ListItemsCategory>
              <span>Nome</span>
              <span>Telefone</span>
              <span>E-mail</span>
              <span>Gênero</span>
              <span>Natureza</span>
            </ListItemsCategory>

            {peers.map(peer => (
              <ListItems key={peer.id}>
                <span>{peer.name || 'null'}</span>
                <span>
                  {(peer.phone &&
                    peer.phone
                      .replace(/^(\d{2})(\d)/g, '($1) $2')
                      .replace(/(\d)(\d{4})$/, '$1-$2')) ||
                    'null'}
                </span>
                <span>{peer.email || 'null'}</span>

                <span>{peer.gender || 'null'}</span>
                <span>{peer.nature || 'null'}</span>
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

export default Peers;
