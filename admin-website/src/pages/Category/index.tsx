import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiChevronLeft,
  FiChevronRight,
  FiEdit,
  FiList,
  FiTrash,
} from 'react-icons/fi';
import Pagination from '../../components/Pagination';
import { Container, List, ListItems, ListItemsCategory } from './styles';
import NavButton from '../../components/NavButton';
import NavPage from '../../components/NavPage';
import Layout from '../../components/Layout';
import MainHeaderButton from '../../components/MainHeaderButton';

const Category: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  function handleSubmit(data: object): void {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <Layout>
      <Container>
        <MainHeaderButton
          icon={FiList}
          name="Categorias"
          buttonName="Adicionar Categoria"
          buttonLink="/category/new"
        />
        <List>
          <ListItemsCategory>
            <span>ID</span>
            <span>Nome</span>
            <span>Unidade</span>
            <span>Permissões</span>
            <span>Editar/Excluir</span>
          </ListItemsCategory>
          <ListItems>
            <span>0001</span>
            <span>Administrador</span>
            <span>Novo Leblon</span>
            <span>
              Compartilha Acessos, Recebe Notificações, Envia Convites
            </span>
            <Link to="/superunit">
              <FiEdit />
              <FiTrash />
            </Link>
          </ListItems>
          <ListItems>
            <span>0001</span>
            <span>Administrador</span>
            <span>Novo Leblon</span>
            <span>
              Compartilha Acessos, Recebe Notificações, Envia Convites
            </span>
            <Link to="/superunit">
              <FiEdit />
              <FiTrash />
            </Link>
          </ListItems>
          <ListItems>
            <span>0001</span>
            <span>Administrador</span>
            <span>Novo Leblon</span>
            <span>
              Compartilha Acessos, Recebe Notificações, Envia Convites
            </span>
            <Link to="/superunit">
              <FiEdit />
              <FiTrash />
            </Link>
          </ListItems>
          <ListItems>
            <span>0001</span>
            <span>Administrador</span>
            <span>Novo Leblon</span>
            <span>
              Compartilha Acessos, Recebe Notificações, Envia Convites
            </span>
            <Link to="/superunit">
              <FiEdit />
              <FiTrash />
            </Link>
          </ListItems>
          <ListItems>
            <span>0001</span>
            <span>Administrador</span>
            <span>Novo Leblon</span>
            <span>
              Compartilha Acessos, Recebe Notificações, Envia Convites
            </span>
            <Link to="/superunit">
              <FiEdit />
              <FiTrash />
            </Link>
          </ListItems>
          <ListItems>
            <span>0001</span>
            <span>Administrador</span>
            <span>Novo Leblon</span>
            <span>
              Compartilha Acessos, Recebe Notificações, Envia Convites
            </span>
            <Link to="/superunit">
              <FiEdit />
              <FiTrash />
            </Link>
          </ListItems>
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
    </Layout>
  );
};

export default Category;
