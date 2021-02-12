import React, { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiHome, FiSave } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { Container, MainHeader } from './styles';
import Layout from '../../Layouts/Default';
import getValidationErrors from '../../utils/getValidationErrors';
import Select from '../../components/Select';
import Button from '../../components/Button';
import InputUnform from '../../components/InputUnform';
import { useSuperunit } from '../../hooks/superunit';
import Header from '../../components/Header';

interface IFormData {
  name: string;
  public_area: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  public_area: Yup.string()
    .required('Tipo obrigatorio')
    .oneOf([
      'Academia',
      'Apartamento',
      'Bloco',
      'Casa',
      'Condomínio',
      'Departamento',
      'Loja',
      'Sala',
    ]),
});

const public_areaValue = {
  Academia: 'Academia',
  Apartamento: 'Apartamento',
  Bloco: 'Bloco',
  Casa: 'Casa',
  Condomínio: 'Condomínio',
  Departamento: 'Departamento',
  Loja: 'Loja',
  Sala: 'Sala',
};

const UnitEdit: React.FC = () => {
  const { id }: { id: string } = useParams();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { selected } = useSuperunit();

  useEffect(() => {
    async function getData() {
      if (selected) {
        const response = await api.get(
          `/superunities/${selected?.id}/unities/${id}`,
        );

        if (!response) return;

        formRef.current?.setFieldValue('public_area', {
          label: response.data.public_area,
          value: response.data.public_area,
        });

        formRef.current?.setFieldValue('name', response.data.name);
      }
    }
    getData();
  }, [selected, id, selected]);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      const unit = { public_area: data.public_area, name: data.name };

      formRef.current?.setErrors({});

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(`/superunities/${selected?.id}/unities/${id}`, unit);

        history.push('/units');

        addToast({
          type: 'success',
          title: 'Unidade atualizada!',
          description: 'Unidade atualizada com sucesso.',
        });
      } catch (err) {
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
    [addToast, selected, id, history],
  );

  return (
    <Layout>
      <Header
        title={{ value: 'Unidades', path: '/units' }}
        subTitle={{ value: 'Editar Unidade', path: `/units/edit/${id}` }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiHome />
            Editar Unidade
          </h1>
        </MainHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputUnform name="name" placeholder="Nome" />
          <Select
            name="public_area"
            options={[
              { label: 'Academia', value: public_areaValue.Academia },
              {
                label: 'Apartamento',
                value: public_areaValue.Apartamento,
              },
              { label: 'Bloco', value: public_areaValue.Bloco },
              { label: 'Casa', value: public_areaValue.Casa },
              { label: 'Condomínio', value: public_areaValue.Condomínio },
              {
                label: 'Departamento',
                value: public_areaValue.Departamento,
              },
              { label: 'Loja', value: public_areaValue.Loja },
              { label: 'Sala', value: public_areaValue.Sala },
            ]}
          />
          <Button type="submit" icon={FiSave}>
            Atualizar
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default UnitEdit;
