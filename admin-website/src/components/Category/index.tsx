import React, { useRef, useState } from 'react';
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
import Select from '../Select';

interface MainUnitCategoryProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const MainUnitCategory: React.FC<MainUnitCategoryProps> = ({
  name,
  icon: Icon,
}) => {
  const formRef = useRef<FormHandles>(null);

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

export default MainUnitCategory;
