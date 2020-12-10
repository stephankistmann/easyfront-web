import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiChevronsRight, FiPlus } from 'react-icons/fi';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { useToast } from '../../hooks/toast';
import { Container, FormContainer } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Header from './Header';
import Select from '../../components/Select';
import { useSuperunit } from '../../hooks/superunit';

interface IFormData {
  user_id: string;
  accessCategory_id: string;
  unit_id: string;
}

interface ISelectOptions {
  id: string;
  name: string;
}

const AddAccess: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { selected } = useSuperunit();
  const { addToast } = useToast();
  const [unities, setUnities] = useState<ISelectOptions[]>([]);
  const [users, setUsers] = useState<ISelectOptions[]>([]);
  const [categories, setCategories] = useState<ISelectOptions[]>([]);

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
      console.log(data);
      formRef.current?.setErrors({});
      try {
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
    },
    [addToast],
  );

  const selectOptionsUser = users.map(user => {
    return {
      label: user.name,
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
      <Container>
        <Header icon={FiChevronsRight} name="Adicionar Acesso" />
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormContainer>
              <Select
                name="user_id"
                placeholderName="Morador"
                options={selectOptionsUser}
              />
              <Select
                name="unit_id"
                placeholderName="Unidade"
                options={selectOptionsUnit}
              />
              <Select
                name="accessCategory_id"
                placeholderName="Categoria"
                options={selectOptionsCategory}
              />
              <Button type="submit" icon={FiPlus} name="AddButton">
                Adicionar
              </Button>
            </FormContainer>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default AddAccess;
