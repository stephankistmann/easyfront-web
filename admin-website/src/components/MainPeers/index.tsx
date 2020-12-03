import React, { useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';
import {
  FiChevronLeft,
  FiChevronRight,
  FiEdit,
  FiTrash,
  FiSearch,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Pagination from '../Pagination';
import {
  Container,
  List,
  ListItems,
  ListItemsCategory,
  FormContainer,
} from './styles';
import Header from './Header';
import NavButton from '../NavButton';
import NavPage from '../NavPage';
import Input from '../Input';
import Button from '../Button';
import api from '../../services/api';

interface MainPeerProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

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

const MainPeer: React.FC<MainPeerProps> = ({ name, icon: Icon }) => {
  const formRef = useRef<FormHandles>(null);
  const [peers, setPeers] = useState<IPeer[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/users');

      if (!response) return;

      setPeers(response.data.data);
    }
    getData();
  }, []);

  console.log(peers);

  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  function handleSubmit(data: object): void {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <Container>
      <Header name={name} icon={Icon} />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome ou e-mail" />
          <Button type="submit" icon={FiSearch} name="SearchButton">
            Pesquisar
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
        >
          <NavButton icon={FiChevronLeft} />
          <NavPage>
            <span>1</span>
          </NavPage>
          <NavButton icon={FiChevronRight} />
        </Pagination>
      </List>
    </Container>
  );
};

export default MainPeer;
