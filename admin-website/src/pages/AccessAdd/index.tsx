import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiChevronsRight, FiPlus } from 'react-icons/fi';
import Button from '../../components/Button';
import Layout from '../../Layouts/Default';
import { useToast } from '../../hooks/toast';
import { Container, MainHeader } from './styles';
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
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    user_id: Yup.string(),
    accessCategory_id: Yup.string(),
    unit_id: Yup.string(),
  });

  useEffect(() => {
    async function getData() {
      if (selected) {
        const unitiesData = await api.get(
          `/superunities/${selected?.id}/unities`,
        );

        if (!unitiesData) return;

        const usersData = await api.get('/users');

        if (!usersData) return;

        const categoriesData = await api.get(
          `/superunities/${selected?.id}/accesses/categories`,
        );

        if (!categoriesData) return;

        setUnities(unitiesData.data.data);
        setUsers(usersData.data.data);
        setCategories(categoriesData.data.data);
      }
    }

    getData();
  }, [selected]);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      formRef.current?.setErrors({});

      setLoading(true);

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        const response = data;

        await api.post(`/superunities/${selected?.id}/accesses`, response);

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
      } finally {
        setLoading(false);
      }
    },
    [addToast, schema],
  );

  const selectOptionsUser = useMemo(
    () =>
      users.map(user => {
        return {
          label: user.email,
          value: user.id,
        };
      }),
    [users],
  );

  const selectOptionsUnit = useMemo(
    () =>
      unities.map(unit => {
        return {
          label: unit.name,
          value: unit.id,
        };
      }),
    [unities],
  );

  const selectOptionsCategory = useMemo(
    () =>
      categories.map(category => {
        return {
          label: category.name,
          value: category.id,
        };
      }),
    [categories],
  );

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
            loading={loading}
          >
            Adicionar
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default AccessAdd;
