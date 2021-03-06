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
import SelectInvites from './SelectInvites';
import { useSuperunit } from '../../hooks/superunit';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface IInvite {
  id: string;
  name: string;
  selected: boolean;
}

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
  inviteTypesIds: string[];
  weekDays: boolean[];
}

interface IValidationErrors {
  name?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
});

const CategoryEdit: React.FC = () => {
  const { id }: { id: string } = useParams();
  const history = useHistory();
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [invites, setInvites] = useState<IInvite[]>([]);
  const [loadedDevices, setLoadedDevices] = useState(false);
  const [loadedInvites, setLoadedInvites] = useState(false);
  const [validationErrors, setValidationErrors] = useState<IValidationErrors>(
    {},
  );
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    const getData = async () => {
      if (selected && loadedDevices && loadedInvites) {
        const categoryData = await api.get(
          `/superunities/${selected?.id}/accesses/categories/${id}`,
        );

        if (!categoryData) return;

        const categoryDevices = categoryData.data.devices;

        const categoryInvites = categoryData.data.inviteTypes;

        const categoryTimeRestriction = {
          min_time: categoryData.data.min_time,
          max_time: categoryData.data.max_time,
          time_limit: categoryData.data.time_limit,
        };

        setTimeRestrictions(categoryTimeRestriction);
        setWeekDays(categoryData.data.weekDays);
        setName(categoryData.data.name);
        setDevices(oldDevices =>
          oldDevices.map(oldDevice => {
            const isSelected = categoryDevices.find(
              (categoryDevice: IDevice) => categoryDevice.id === oldDevice.id,
            );

            return isSelected ? { ...oldDevice, selected: true } : oldDevice;
          }),
        );

        setInvites(oldInvites =>
          oldInvites.map(oldInvite => {
            const isSelected = categoryInvites.find(
              (categoryInvite: IInvite) => categoryInvite.id === oldInvite.id,
            );

            return isSelected ? { ...oldInvite, selected: true } : oldInvite;
          }),
        );
      }
    };

    getData();
  }, [
    id,
    selected,
    setWeekDays,
    setDevices,
    setName,
    setTimeRestrictions,
    loadedDevices,
    loadedInvites,
  ]);

  useEffect(() => {
    const getDevices = async () => {
      if (selected) {
        const response = await api.get(`/superunities/${selected?.id}/devices`);

        if (response.status !== 200) return;

        setDevices(
          response.data.map((device: IDevice) => ({
            ...device,
            selected: false,
          })),
        );
        setLoadedDevices(true);
      }
    };

    getDevices();
  }, [selected]);

  useEffect(() => {
    const getInvites = async () => {
      if (selected) {
        const response = await api.get(
          `/superunities/${selected?.id}/invites/types`,
        );

        if (response.status !== 200) return;

        setInvites(
          response.data.data.map((invite: IInvite) => ({
            ...invite,
            selected: false,
          })),
        );
        setLoadedInvites(true);
      }
    };

    getInvites();
  }, [selected]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoading(true);

      setValidationErrors({});

      const devicesIds = devices
        .filter(device => device.selected)
        .map(device => device.id);

      const inviteTypesIds = invites
        .filter(invite => invite.selected)
        .map(invite => invite.id);

      const { time_limit, min_time, max_time } = timeRestrictions;

      const data: ICategory = {
        time_limit,
        min_time,
        max_time,
        name,
        devicesIds,
        inviteTypesIds,
        weekDays,
      };

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(
          `/superunities/${selected?.id}/accesses/categories/${id}`,
          data,
        );

        addToast({
          type: 'success',
          title: 'Categoria atualizada!',
          description: 'A categoria foi atualizada com sucesso.',
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

      history.push('/category');
    },
    [
      selected,
      weekDays,
      devices,
      invites,
      name,
      timeRestrictions,
      addToast,
      history,
      id,
    ],
  );

  return (
    <Layout>
      <Header
        title={{ value: 'Categoriass', path: '/category' }}
        subTitle={{ value: 'Editar categoria', path: '/category/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiList />
            Editar Categoria
          </h1>
        </MainHeader>
        <Content>
          <form onSubmit={handleSubmit}>
            <SelectWeekDay
              value={weekDays}
              onChange={value => setWeekDays(value)}
            />

            <hr />

            <SelectTimeRestrictions
              value={timeRestrictions}
              onChange={value => setTimeRestrictions(value)}
            />

            <hr />

            <SelectDevices
              value={devices}
              onChange={value => setDevices(value)}
            />

            <hr />

            <SelectInvites
              value={invites}
              onChange={value => setInvites(value)}
            />

            <hr />

            <Button type="submit" icon={FiPlus} loading={loading}>
              Salvar
            </Button>
          </form>
        </Content>
      </Container>
    </Layout>
  );
};

export default CategoryEdit;
