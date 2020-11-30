import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { Container, DeleteContainer } from './styles';
import Title from '../../components/Title';
import Layout from '../../components/Layout';
import { useSuperunit } from '../../hooks/superunit';
import Button from '../../components/Button';

interface IUnit {
  id: string;
}

const DeleteUnit: React.FC = () => {
  const { id }: { id: string } = useParams();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { selected } = useSuperunit();
  const [unitID, setUnitID] = useState<IUnit>();

  const superunitId = selected?.id;

  useEffect(() => {
    async function getData() {
      const response = await api.get(
        `/superunities/${superunitId}/unities/${id}`,
      );

      setUnitID(response.data);
    }
    getData();
  }, []);

  const handleClick = useCallback(async () => {
    formRef.current?.setErrors({});

    try {
      await api.delete(`/superunities/${superunitId}/unities/${id}`);

      history.push('/units');

      addToast({
        type: 'success',
        title: 'Unidade excluída !',
        description: 'Unidade excluída  com sucesso.',
      });
    } catch (err) {
      console.log(err);
      addToast({
        type: 'error',
        title: 'Erro ao excluir unidade',
        description: 'Ocorreu um erro ao excluir unidade, tente novamente.',
      });
    }
  }, [addToast, superunitId, id]);

  return (
    <Layout>
      <Container>
        <Title icon={FiTrash} name="Excluir unidade" />

        <DeleteContainer>
          <div>
            <span>ID</span>
            {unitID && unitID.id}
          </div>
          <Button type="button" onClick={handleClick}>
            Excluir
          </Button>
        </DeleteContainer>
      </Container>
    </Layout>
  );
};

export default DeleteUnit;
