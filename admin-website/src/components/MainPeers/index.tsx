import React, { useRef } from 'react';
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
import {
  Container,
  List,
  ListItems,
  ListItemsCategory,
  Pagination,
  FormContainer,
} from './styles';
import Header from './Header';
import NavButton from '../NavButton';
import NavPage from '../NavPage';
import Input from '../Input';
import Button from '../Button';

interface MainPeerProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const MainPeer: React.FC<MainPeerProps> = ({ name, icon: Icon }) => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: object): void {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <Container>
      <Header name={name} icon={Icon} />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="cpf" placeholder="CPF" />
          <Button type="submit" icon={FiSearch} name="SearchButton">
            Pesquisar
          </Button>
        </Form>
      </FormContainer>
      <List>
        <ListItemsCategory>
          <span>ID</span>
          <span>Nome</span>
          <span>Telefone</span>
          <span>E-mail</span>
          <span>Natureza</span>
          <span>CPF</span>
          <span>Editar/Excluir</span>
        </ListItemsCategory>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>(99) 99999-9999</span>
          <span>email@email.com</span>
          <span>Pessoa Física</span>
          <span>123.456.789-10</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>(99) 99999-9999</span>
          <span>email@email.com</span>
          <span>Pessoa Física</span>
          <span>123.456.789-10</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>(99) 99999-9999</span>
          <span>email@email.com</span>
          <span>Pessoa Física</span>
          <span>123.456.789-10</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>(99) 99999-9999</span>
          <span>email@email.com</span>
          <span>Pessoa Física</span>
          <span>123.456.789-10</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>(99) 99999-9999</span>
          <span>email@email.com</span>
          <span>Pessoa Física</span>
          <span>123.456.789-10</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>(99) 99999-9999</span>
          <span>email@email.com</span>
          <span>Pessoa Física</span>
          <span>123.456.789-10</span>
          <Link to="/superunit">
            <FiEdit />
            <FiTrash />
          </Link>
        </ListItems>
        <Pagination>
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
