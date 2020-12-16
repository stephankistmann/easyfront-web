import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiChevronsRight, FiPlus } from 'react-icons/fi';
import Button from '../../components/Button';
import Layout from '../../Layouts';
import { useToast } from '../../hooks/toast';
import { Container, MainHeader, FormContainer } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { useSuperunit } from '../../hooks/superunit';
import Header from '../../components/Header';
import Select from '../../components/Select';

interface IFormData {
  user_id: string;
  accessCategory_id: string;
  unit_id: string;
}

interface ISelectOptions {
  id: string;
  name: string;
  email: string;
}

const AccessAdd: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { selected } = useSuperunit();
  const { addToast } = useToast();
  const [unities, setUnities] = useState<ISelectOptions[]>([]);
  const [users, setUsers] = useState<ISelectOptions[]>([]);
  const [categories, setCategories] = useState<ISelectOptions[]>([]);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const superunitId = selected?.id;

  useEffect(() => {
    async function getData() {
      const unitiesData = await api.get(`/superunities/${superunitId}/unities`);

      const usersData = await api.get('/users');

      const categoriesData = await api.get(
        `/superunities/${superunitId}/accesscategories`,
      );

      function setData() {
        setUnities(unitiesData.data.data);
        setUsers(usersData.data.data);
        setCategories(categoriesData.data.data);
      }

      setData();
    }

    getData();
  }, [superunitId]);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      formRef.current?.setErrors({});
      try {
        setLoadingCreate(true);
        const schema = Yup.object().shape({
          user_id: Yup.string(),
          accessCategory_id: Yup.string(),
          unit_id: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = data;

        await api.post(`/superunities/${superunitId}/accesses`, response);

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Acesso cadastrado com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao tentar realiazar o cadastro, tente novamente.',
        });
      }
      setLoadingCreate(false);
    },
    [addToast, superunitId],
  );

  const selectOptionsUser = users.map(user => {
    return {
      label: user.email,
      value: user.id,
    };
  });

  const selectOptionsUnit = unities.map(unit => {
    return {
      label: unit.name,
      value: unit.id,
    };
  });

  const selectOptionsCategory = categories.map(category => {
    return {
      label: category.name,
      value: category.id,
    };
  });

  return (
    <Layout>
      <Header
        title={{ value: 'Acessos', path: '/access' }}
        subTitle={{ value: 'Adicionar Acesso', path: '/access/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiChevronsRight />
            Adicionar Acesso
          </h1>
        </MainHeader>
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Select
              name="user_id"
              placeholder="Morador"
              options={selectOptionsUser}
            />
            <Select
              name="unit_id"
              placeholder="Unidade"
              options={selectOptionsUnit}
            />
            <Select
              name="accessCategory_id"
              placeholder="Categoria"
              options={selectOptionsCategory}
              width="400px"
            />
            <Button
              type="submit"
              icon={FiPlus}
              name="AddButton"
              loading={loadingCreate}
            >
              Adicionar
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default AccessAdd;
