import React, { useRef, useCallback } from 'react';
import { FiHome, FiPlus } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, FormContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import MainHeader from '../../components/MainHeader';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Select from '../../components/Select';
import { useSuperunit } from '../../hooks/superunit';
import Layout from '../../Layouts';

interface IFormData {
  name: string;
  type: string;
}

const UnitAdd: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { selected } = useSuperunit();

  const superunitId = selected?.id;

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      const unit = { public_area: data.type, name: data.name };

      formRef.current?.setErrors({});
      try {
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

        await schema.validate(unit, {
          abortEarly: false,
        });

        await api.post(`/superunities/${superunitId}/unities`, unit);

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Unidade cadastrada com sucesso.',
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
    [addToast, superunitId],
  );

  return (
    <Layout>
      <Container>
        <MainHeader name="Adicionar Unidade" icon={FiHome} />
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" />
            <Select
              name="type"
              options={[
                { label: 'Academia', value: 'Academia' },
                { label: 'Apartamento', value: 'Apartamento' },
                { label: 'Bloco', value: 'Bloco' },
                { label: 'Casa', value: 'Casa' },
                { label: 'Condomínio', value: 'Condomínio' },
                { label: 'Departamento', value: 'Departamento' },
                { label: 'Loja', value: 'Loja' },
                { label: 'Sala', value: 'Sala' },
              ]}
              defaultValue={{
                label: 'Tipo',
                value: '',
              }}
            />
            <Button type="submit" icon={FiPlus}>
              Adicionar
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default UnitAdd;
