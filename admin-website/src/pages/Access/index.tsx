import React from 'react';
import { FiChevronsRight, FiEdit, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Header from './Header';
import { Container, List, ListItems, ListItemsCategory } from './styles';

const Access: React.FC = () => (
  <Layout>
    <Container>
      <Header icon={FiChevronsRight} name="Acessos" />
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
          <span>Compartilha Acessos, Recebe Notificações, Envia Convites</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Administrador</span>
          <span>Novo Leblon</span>
          <span>Compartilha Acessos, Recebe Notificações, Envia Convites</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Administrador</span>
          <span>Novo Leblon</span>
          <span>Compartilha Acessos, Recebe Notificações, Envia Convites</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Administrador</span>
          <span>Novo Leblon</span>
          <span>Compartilha Acessos, Recebe Notificações, Envia Convites</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Administrador</span>
          <span>Novo Leblon</span>
          <span>Compartilha Acessos, Recebe Notificações, Envia Convites</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Administrador</span>
          <span>Novo Leblon</span>
          <span>Compartilha Acessos, Recebe Notificações, Envia Convites</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
      </List>
    </Container>
  </Layout>
);

export default Access;