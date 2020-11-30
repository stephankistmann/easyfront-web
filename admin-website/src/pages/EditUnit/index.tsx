import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiEdit } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { Container, FormContainer } from './styles';
import Title from '../../components/Title';
import Layout from '../../components/Layout';
import getValidationErrors from '../../utils/getValidationErrors';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useSuperunit } from '../../hooks/superunit';

interface IFormData {
  name: string;
  public_area: string;
}

const EditUnit: React.FC = () => {
  const { id }: { id: string } = useParams();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { selected } = useSuperunit();
  const [unitName, setUnitName] = useState<IFormData>();

  const superunitId = selected?.id;

  useEffect(() => {
    async function getData() {
      const response = await api.get(
        `/superunities/${superunitId}/unities/${id}`,
      );

      setUnitName(response.data);
    }
    getData();
  }, []);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      const unit = { public_area: data.public_area, name: data.name };

      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          public_area: Yup.string()
            .required('Tipo obrigatorio')
            .oneOf([
              'gym',
              'apt',
              'block',
              'house',
              'condominium',
              'deppartment',
              'store',
              'room',
            ]),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(`/superunities/${superunitId}/unities/${id}`, unit);

        history.push('/units');

        addToast({
          type: 'success',
          title: 'Unidade atualizada!',
          description: 'Unidade atualizada com sucesso.',
        });
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu um erro ao tentar atualizar os dados da unidade, tente novamente.',
        });
      }
    },
    [addToast, superunitId, id],
  );

  return (
    <Layout>
      <Container>
        <Title icon={FiEdit} name="Editar unidade" />
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Nome"
              defaultValue={unitName && unitName.name}
            />
            <Select
              name="public_area"
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
            <Button type="submit">Atualizar</Button>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default EditUnit;
