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
import Select from '../Select';
import { useSuperunit } from '../../hooks/superunit';
import api from '../../services/api';

interface MainUnitsProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

interface IUnit {
  id: string;
  name: string;
  public_area: string;
  superUnit_id: string;
}

const MainUnits: React.FC<MainUnitsProps> = ({ name, icon: Icon }) => {
  const { selected } = useSuperunit();

  const [data, setData] = useState<IUnit[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (selected) {
        const response = await api.get(`/superunities/${selected.id}/unities`);

        if (!response) return;

        setData(response.data.data);
      }
    };

    getData();
  }, [selected, data]);

  const formRef = useRef<FormHandles>(null);

  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  function handleSubmit(dataSubmit: object): void {
    // eslint-disable-next-line no-console
    console.log(dataSubmit);
  }

  return (
    <Container>
      <Header name={name} icon={Icon} />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Select
            name="type"
            options={[
              { label: 'Academia', value: 'gym' },
              { label: 'Apartamento', value: 'apt' },
              { label: 'Bloco', value: 'block' },
              { label: 'Casa', value: 'house' },
              { label: 'Condomínio', value: 'condominium' },
              { label: 'Departamento', value: 'deppartment' },
              { label: 'Loja', value: 'store' },
              { label: 'Sala', value: 'room' },
            ]}
            defaultValue={{
              label: 'Tipo',
              value: '',
            }}
          />
          <Button type="submit" icon={FiSearch} name="SearchButton">
            Pesquisar
          </Button>
        </Form>
      </FormContainer>
      <List>
        <ListItemsCategory>
          <span>ID</span>
          <span>Nome</span>
          <span>Area</span>
          <span>Superunit ID</span>
          <span>Editar/Excluir</span>
        </ListItemsCategory>
        {data.map(unit => (
          <ListItems>
            <span>{unit.id}</span>
            <span>{unit.name}</span>
            <span>{unit.public_area}</span>
            <span>{unit.superUnit_id}</span>
            <div>
              <Link to={`/units/edit/${unit.id}`}>
                <FiEdit />
              </Link>
              <Link to={`/units/delete/${unit.id}`}>
                <FiTrash />
              </Link>
            </div>
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

export default MainUnits;
