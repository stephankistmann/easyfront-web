/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiSave, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { Container } from './styles';
import Layout from '../../Layouts/Default';
import getValidationErrors from '../../utils/getValidationErrors';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Header from '../../components/Header';
import { MainHeader } from '../Units/styles';

interface IFormData {
  name: string;
  phone: string;
  cpf?: string;
  gender: string;
  nature: string;
  rg?: string;
  id: string;
}

const PeerEdit: React.FC = () => {
  const { id }: { id: string } = useParams();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const [peers, setPeers] = useState<IFormData[]>([]);
  const [selectedPeer, setSelectedPeer] = useState<IFormData>();

  useEffect(() => {
    async function getData() {
      const response = await api.get('/users');

      if (!response) return;

      setPeers(response.data.data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function selectPeer(selectedId: string) {
      const selectedPeers = peers.find(peer => peer.id === selectedId);

      if (!selectedPeers) return;

      setSelectedPeer(selectedPeers);
    }
    selectPeer(id);
  });

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string()
            .matches(/^[a-zA-Z\u00C0-\u00FF ]+$/i, 'Digite apenas letras')
            .required('Nome obrigatório'),
          phone: Yup.string()
            .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Digite um número válido')
            .required('Celular obrigatório'),
          cpf: Yup.string().matches(
            /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            'Digite um CPF válido',
          ),
          rg: Yup.string().length(10, 'Digite um RG válido'),
          gender: Yup.string()
            .oneOf(['male', 'female', 'not-informed'])
            .required('Gênero obrigatório'),
          nature: Yup.string()
            .oneOf(['physic', 'juridic'])
            .required('Natureza obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.phone = data.phone.replace(/[\(\)\s-]/g, '');

        if (data.cpf) data.cpf = data.cpf.replace(/[\.-]/g, '');

        const { name, phone, cpf, gender, nature, rg } = data;

        const formData = {
          name,
          phone,
          cpf,
          rg,
          gender,
          nature,
        };

        await api.put('/users', formData);

        history.push('/peers');

        addToast({
          type: 'success',
          title: 'Parceiro atualizado!',
          description: 'Os dados do parceiro foram atualizadas com sucesso.',
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
            'Ocorreu um erro ao tentar atualizar os dados, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Layout>
      <Header
        title={{ value: 'Parceiros', path: '/peers' }}
        subTitle={{ value: 'Editar Parceiro', path: `/peers/edit/${id}` }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <div>
            <h1>
              <FiUser />
              Editar Parceiro
            </h1>
          </div>
        </MainHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Nome"
            defaultValue={selectedPeer?.name}
          />
          <InputMask
            name="cpf"
            defaultValue={selectedPeer?.cpf}
            mask="999.999.999-99"
          />
          <InputMask name="rg" mask="9999999999" placeholder="RG" />

          <InputMask
            name="phone"
            mask="(99) 99999-9999"
            placeholder="Telefone"
          />

          <Select
            name="gender"
            options={[
              { label: 'Masculino', value: 'male' },
              { label: 'Feminino', value: 'female' },
              { label: 'Não informado', value: 'not-informed' },
            ]}
          />

          <Select
            name="nature"
            options={[
              { label: 'Físico', value: 'physic' },
              { label: 'Jurídico', value: 'juridic' },
            ]}
          />
          <Button type="submit" icon={FiSave}>
            Salvar
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default PeerEdit;
