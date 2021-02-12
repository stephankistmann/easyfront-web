import React, { useRef, useCallback, useState } from 'react';
import { FiCodepen, FiPlus } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, MainHeader, ButtonContainer } from './styles';
import InputUnform from '../../components/InputUnform';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Select from '../../components/Select';
import { useSuperunit } from '../../hooks/superunit';
import Layout from '../../Layouts/Default';
import Header from '../../components/Header';

interface IFormData {
  name: string;
  size: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  size: Yup.string().required('Tipo obrigatorio').oneOf(['s', 'm', 'l']),
});

const UnitAdd: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { selected } = useSuperunit();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      const volume = { size: data.size, name: data.name };

      formRef.current?.setErrors({});

      setLoading(true);

      try {
        await schema.validate(volume, {
          abortEarly: false,
        });

        await api.post(
          `/superunities/${selected?.id}/lockerroom/volumes`,
          volume,
        );

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Volume cadastrado com sucesso.',
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
    [addToast, selected],
  );

  return (
    <Layout>
      <Header
        title={{ value: 'Volumes', path: '/lockerroom' }}
        subTitle={{ value: 'Adicionar Volume', path: '/lockerroom/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiCodepen />
            Adicionar Volume
          </h1>
        </MainHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputUnform name="name" placeholder="Nome" />
          <Select
            name="size"
            options={[
              { label: 'Pequeno', value: 's' },
              { label: 'Médio', value: 'm' },
              { label: 'Grande', value: 'l' },
            ]}
            defaultValue={{
              label: 'Tamanho',
              value: '',
            }}
          />
          <ButtonContainer>
            <Button type="submit" icon={FiPlus} loading={loading}>
              Adicionar
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    </Layout>
  );
};

export default UnitAdd;
