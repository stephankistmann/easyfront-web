import React, { useCallback, useEffect, useState } from 'react';
import { FiList } from 'react-icons/fi';
import { Container, MainHeader, Content } from './styles';
import Layout from '../../Layouts/Default';
import Header from '../../components/Header';
import SelectWeekDay from '../../components/SelectWeekDay';
import SelectDevices from './SelectDevices';
import api from '../../services/api';
import SelectTimeRestrictions from './SelectTimeRestrictions';
import { useSuperunit } from '../../hooks/superunit';

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

const CategoryAdd: React.FC = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);
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

    getDevices();
  }, [superUnitId]);

  const handleSubmit = useCallback(() => {
    const devicesIds = devices
      .filter(device => device.selected)
      .map(device => device.id);
  }, [devices, weekDays]);

  return (
    <Layout>
      <Header
        title={{ value: 'Categorias', path: '/category' }}
        subTitle={{ value: 'Adicionar Categoria', path: '/category/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiList />
            Adicionar Parceiro
          </h1>
        </MainHeader>
        <Content>
          <input />

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
        </Content>
      </Container>
    </Layout>
  );
};

export default CategoryAdd;
