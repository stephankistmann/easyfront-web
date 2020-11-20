import React, { useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  Container,
  List,
  ListItems,
  ListItemsCategory,
  FilterContainer,
  Pagination,
} from './styles';
import Header from './Header';
import Select from '../Select';
import NavButton from '../NavButton';
import NavPage from '../NavPage';

interface MainProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Main: React.FC<MainProps> = ({ name, icon: Icon }) => {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <Header name={name} icon={Icon} />
      <FilterContainer>
        <Form
          ref={formRef}
          onSubmit={() => {
            console.log('teste');
          }}
        >
          <span>Pesquisar por nome</span>
          <Select name="selectCountry" />
          <span>Pesquisar por e-mail</span>
          <Select name="selectState" />
          <span>Pesquisar por cpf</span>
          <Select name="selectCity" />
        </Form>
      </FilterContainer>
      <List>
        <ListItemsCategory>
          <span>ID</span>
          <span>Nome</span>
          <span>País</span>
          <span>Estado</span>
          <span>Cidade</span>
          <span>Endereço</span>
          <span>Abrir</span>
        </ListItemsCategory>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>Brasil</span>
          <span>Rio de Janeiro</span>
          <span>Rio de Janeiro</span>
          <span>Av. das Américas 7000</span>
          <Link to="/superunit">
            <FiExternalLink />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>Brasil</span>
          <span>Rio de Janeiro</span>
          <span>Rio de Janeiro</span>
          <span>Av. das Américas 7000</span>
          <Link to="/superunit">
            <FiExternalLink />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>Brasil</span>
          <span>Rio de Janeiro</span>
          <span>Rio de Janeiro</span>
          <span>Av. das Américas 7000</span>
          <Link to="/superunit">
            <FiExternalLink />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>Brasil</span>
          <span>Rio de Janeiro</span>
          <span>Rio de Janeiro</span>
          <span>Av. das Américas 7000</span>
          <Link to="/superunit">
            <FiExternalLink />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>Brasil</span>
          <span>Rio de Janeiro</span>
          <span>Rio de Janeiro</span>
          <span>Av. das Américas 7000</span>
          <Link to="/superunit">
            <FiExternalLink />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>Brasil</span>
          <span>Rio de Janeiro</span>
          <span>Rio de Janeiro</span>
          <span>Av. das Américas 7000</span>
          <Link to="/superunit">
            <FiExternalLink />
          </Link>
        </ListItems>
        <ListItems>
          <span>0001</span>
          <span>Stephan Kistmann Jacob</span>
          <span>Brasil</span>
          <span>Rio de Janeiro</span>
          <span>Rio de Janeiro</span>
          <span>Av. das Américas 7000</span>
          <Link to="/superunit">
            <FiExternalLink />
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

export default Main;
