import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiChevronsRight, FiClock, FiPlus } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
import { useToast } from '../../hooks/toast';
import { Container, FormContainer } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Header from './Header';
import Select from '../../components/Select';

const NewAcess: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: object) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = data;

        await api.post('/users', response);

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Parceiro cadastrado com sucesso.',
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

  return (
    <Layout>
      <Container>
        <Header icon={FiChevronsRight} name="Novo Acesso" />
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormContainer>
              <Select
                name="name"
                options={[
                  { label: 'João', value: '' },
                  { label: 'Valéria', value: '' },
                  { label: 'Roberto', value: '' },
                  { label: 'Lilian', value: '' },
                  { label: 'Christian', value: '' },
                ]}
                defaultValue={{
                  label: 'Morador',
                  value: '',
                }}
              />
              <Select
                name="unity"
                options={[
                  { label: 'Unidade 1', value: '' },
                  { label: 'Unidade 2', value: '' },
                  { label: 'Unidade 3', value: '' },
                  { label: 'Unidade 4', value: '' },
                  { label: 'Unidade 5', value: '' },
                ]}
                defaultValue={{
                  label: 'Unidades',
                  value: '',
                }}
              />
              <Select
                name="category"
                options={[
                  { label: 'Categoria 1', value: '' },
                  { label: 'Categoria 2', value: '' },
                  { label: 'Categoria 3', value: '' },
                  { label: 'Categoria 4', value: '' },
                  { label: 'Categoria 5', value: '' },
                ]}
                defaultValue={{
                  label: 'Categoria',
                  value: '',
                }}
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

export default NewAcess;
