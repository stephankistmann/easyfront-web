import React, { useCallback, useEffect, useState } from 'react';
import { FiList, FiPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import { Container, MainHeader, Content } from './styles';
import Layout from '../../Layouts/Default';
import Header from '../../components/Header';
import SelectWeekDay from '../../components/SelectWeekDay';
import SelectDevices from './SelectDevices';
import api from '../../services/api';
import SelectTimeRestrictions from './SelectTimeRestrictions';
import { useSuperunit } from '../../hooks/superunit';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface IDevice {
  id: string;
  name: string;
  selected: boolean;
}

interface ITimeRestrictions {
  time_limit: boolean;
  min_time: string;
  max_time: string;
}

interface ICategory {
  name: string;
  min_time: string;
  max_time: string;
  time_limit: boolean;
  devicesIds: string[];
  weekDays: boolean[];
}

interface IValidationErrors {
  name?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
});

const InviteEdit: React.FC = () => {
  const { id }: { id: string } = useParams();
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [validationErrors, setValidationErrors] = useState<IValidationErrors>(
    {},
  );
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { addToast } = useToast();
  const [timeRestrictions, setTimeRestrictions] = useState<ITimeRestrictions>({
    time_limit: false,
    min_time: '00:00',
    max_time: '23:59',
  });
  const [weekDays, setWeekDays] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const { selected } = useSuperunit();

  const superUnitId = selected?.id;

  useEffect(() => {
    const getData = async () => {
      if (superUnitId) {
        const inviteData = await api.get(
          `superunities/${superUnitId}/invites/types/${id}`,
        );

        if (!inviteData) return;

        setName(inviteData.data.name);
        setWeekDays(inviteData.data.weekDays);
        // setTimeRestrictions(
        //   (inviteData.data.time_limit,
        //   inviteData.data.min_time,
        //   inviteData.data.max_time),
        // );
      }
    };

    const getDevices = async () => {
      if (superUnitId) {
        const response = await api.get(`/superunities/${superUnitId}/devices`);

        if (response.status !== 200) return;

        setDevices(
          response.data.map((device: IDevice) => ({
            ...device,
            selected: false,
          })),
        );
      }
    };

    getData();
    getDevices();
  }, [id, superUnitId]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoading(true);

      setValidationErrors({});

      const devicesIds = devices
        .filter(device => device.selected)
        .map(device => device.id);

      const { time_limit, min_time, max_time } = timeRestrictions;

      const data: ICategory = {
        time_limit,
        min_time,
        max_time,
        name,
        devicesIds,
        weekDays,
      };

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(
          `/superunities/${superUnitId}/invites/types/${id}`,
          data,
        );

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Categoria cadastrada com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          setValidationErrors(errors);

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

      setLoading(false);

      history.push('/invites');
    },
    [
      superUnitId,
      weekDays,
      devices,
      name,
      timeRestrictions,
      addToast,
      id,
      history,
    ],
  );
  return (
    <Layout>
      <Header
        title={{ value: 'Tipos de Convites', path: '/invites' }}
        subTitle={{ value: 'Editar tipo de Convite', path: '/invites/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiList />
            Editar tipo de Convite
          </h1>
        </MainHeader>
        <Content>
          <form onSubmit={handleSubmit}>
            <Input
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Nome"
              error={validationErrors?.name}
            />

            <SelectWeekDay
              value={weekDays}
              onChange={value => setWeekDays(value)}
            />

            <SelectTimeRestrictions
              value={timeRestrictions}
              onChange={value => setTimeRestrictions(value)}
            />

            <SelectDevices
              value={devices}
              onChange={value => setDevices(value)}
            />

            <Button type="submit" icon={FiPlus} loading={loading}>
              Salvar
            </Button>
          </form>
        </Content>
      </Container>
    </Layout>
  );
};

export default InviteEdit;
