import React, { useEffect, useRef, useState } from 'react';
import { FiEdit, FiUsers, FiXCircle, FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  Container,
  List,
  ListItems,
  ListItemsCategory,
  FormContainer,
} from './styles';
import useDebounce from '../../hooks/debounce';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import Pagination from '../../components/Pagination';
import Layout from '../../components/Layout';
import MainHeaderButton from '../../components/MainHeaderButton';

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

const MainPeer: React.FC = () => {
  const [peers, setPeers] = useState<IPeer[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      handleSearch(debouncedSearchTerm);

      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  function handleSearch(searchData: string) {
    const search = searchData;

    async function getData() {
      const response = await api.get('/users', { params: { search } });
      setPeers(response.data.data);
    }

    getData();
  }

  function handleReset() {
    async function getData() {
      const response = await api.get('/users', { params: { page } });

      if (!response) return;

      setPeers(response.data.data);

      setPage(response.data.page);

      setTotalPages(response.data.total_pages);
    }

    getData();

    formRef.current?.reset();
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get('/users', { params: { page } });

      if (!response) return;

      setPeers(response.data.data);

      setPage(response.data.page);

      console.log(response.data.page);
      setTotalPages(response.data.total_pages);
    }

    getData();
  }, [page]);

  return (
    <Layout>
      <Container>
        <MainHeaderButton
          name="Parceiros"
          icon={FiUsers}
          buttonName="Adicionar Parceiro"
          buttonLink="/peers/new"
        />
        <FormContainer>
          <Form ref={formRef} onSubmit={() => debouncedSearchTerm}>
            <Input
              name="search"
              placeholder="Nome ou e-mail"
              onChange={e => setSearchTerm(e.target.value)}
              icon={FiSearch}
            />
            <Button
              type="button"
              icon={FiXCircle}
              name="ResetButton"
              onClick={handleReset}
            >
              Resetar
            </Button>
          </Form>
        </FormContainer>
        <List>
          <ListItemsCategory>
            <span>Nome</span>
            <span>Telefone</span>
            <span>E-mail</span>
            <span>CPF</span>
            <span>RG</span>
            <span>Gênero</span>
            <span>Natureza</span>
            <span>ID</span>
            <span>Editar</span>
          </ListItemsCategory>

          {peers.map(peer => (
            <ListItems key={peer.id}>
              <span>{peer.name || 'null'}</span>
              <span>{peer.phone || 'null'}</span>
              <span>{peer.email || 'null'}</span>
              <span>{peer.cpf || 'null'}</span>
              <span>{peer.rg || 'null'}</span>
              <span>{peer.gender || 'null'}</span>
              <span>{peer.nature || 'null'}</span>
              <span>{peer.id || 'null'}</span>
              <FiEdit />
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

export default MainPeer;
