import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { FiChevronsRight, FiPlus } from 'react-icons/fi';
import Button from '../../components/Button';
import Layout from '../../Layouts/Default';
import { useToast } from '../../hooks/toast';
import { Container, MainHeader } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Select from '../../components/Select';
import { useSuperunit } from '../../hooks/superunit';
import Header from '../../components/Header';

interface IFormData {
  accessCategory_id: string;
  unit_id: string;
  active: boolean;
}

interface IAccessCategory {
  id: string;
  name: string;
}

interface IUnitCategory {
  id: string;
  name: string;
}

interface ISelectOptions {
  id: string;
  name: string;
  accessCategory: IAccessCategory;
  unit: IUnitCategory;
}

const AccessEdit: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { id }: { id: string } = useParams();
  const { selected } = useSuperunit();
  const { addToast } = useToast();
  const [unities, setUnities] = useState<ISelectOptions[]>([]);
  const [categories, setCategories] = useState<ISelectOptions[]>([]);

  const superunitId = selected?.id;

  const schema = Yup.object().shape({
    accessCategory_id: Yup.string(),
    unit_id: Yup.string(),
  });

  useEffect(() => {
    async function getData() {
      if (selected) {
        const unitiesData = await api.get(
          `/superunities/${superunitId}/unities`,
        );

        if (!unitiesData) return;

        setUnities(unitiesData.data.data);
      }
    }

    getData();
  }, [superunitId, id, selected]);

  useEffect(() => {
    async function getData() {
      if (selected) {
        const categoriesData = await api.get(
          `/superunities/${superunitId}/accesses/categories`,
        );

        if (!categoriesData) return;

        setCategories(categoriesData.data.data);
      }
    }

    getData();
  }, [superunitId, id, selected]);

  useEffect(() => {
    async function getData() {
      if (selected) {
        const accessData = await api.get(
          `/superunities/${superunitId}/accesses/${id}`,
        );

        if (!accessData) return;

        formRef.current?.setFieldValue('unit_id', {
          label: accessData.data.unit.name,
          value: accessData.data.unit.id,
        });

        formRef.current?.setFieldValue('accessCategory_id', {
          label: accessData.data.accessCategory.name,
          value: accessData.data.accessCategory.id,
        });
      }
    }

    getData();
  }, [superunitId, id, selected]);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      formRef.current?.setErrors({});
      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        const newData: IFormData = Object.assign(data, { active: true });

        await api.patch(`/superunities/${superunitId}/accesses/${id}`, newData);

        addToast({
          type: 'success',
          title: 'Acesso atualzado!',
          description: 'O acesso foi atualizado com sucesso.',
        });

        history.push('/access');
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
    [addToast, id, superunitId, schema, history],
  );

  const optionsUnit = useMemo(
    () =>
      unities.map(unit => {
        return {
          label: unit.name,
          value: unit.id,
        };
      }),
    [unities],
  );

  const optionsCategory = useMemo(
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
        subTitle={{ value: 'Editar Acesso', path: `/access/edit/${id}` }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiChevronsRight />
            Editar Accesso
          </h1>
        </MainHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Select name="accessCategory_id" options={optionsCategory} />
          <Select name="unit_id" options={optionsUnit} />
          <Button type="submit" name="AddButton" icon={FiPlus}>
            Atualizar
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default AccessEdit;
