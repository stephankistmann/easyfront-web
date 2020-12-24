import React, { useCallback, useEffect, useState } from 'react';
import { FiList, FiPlus } from 'react-icons/fi';
// import * as Yup from 'yup';
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
// import { useToast } from '../../hooks/toast';
// import getValidationErrors from '../../utils/getValidationErrors';

interface IInvite {
  id: string;
  name: string;
  selected: boolean;
}

interface ITimeRestrictions {
  time_limit: boolean;
  min_time: string;
  max_time: string;
}

// interface IFormData {
//   name: string;
//   min_time: string;
//   max_time: string;
//   time_limit: boolean;
//   deviceIds: string[];
//   weekDays: boolean[];
// }

const InviteAdd: React.FC = () => {
  const [invites, setInvites] = useState<IInvite[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  // const { addToast } = useToast();
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

  // const schema = Yup.object().shape({
  //   name: Yup.string().required('Nome obrigatório'),
  //   devicesIds: Yup.array()
  //     .of(Yup.string())
  //     .required('Dispositivo obrigatório'),
  // });

  useEffect(() => {
    const getInvites = async () => {
      if (superUnitId) {
        const response = await api.get(`/superunities/${superUnitId}/devices`);

        if (response.status !== 200) return;

        setInvites(
          response.data.map((invite: IInvite) => ({
            ...invite,
            selected: false,
          })),
        );
      }
    };

    getInvites();
  }, [superUnitId]);

  const handleChange = useCallback(value => {
    const newInputValue = value;

    setInputValue(newInputValue);
  }, []);

  // const handleSubmit = useCallback(
  //   async (data: IFormData) => {
  //     setLoading(true);

  //     const devicesIds = devices
  //       .filter(device => device.selected)
  //       .map(device => device.id);

  //     const { time_limit, min_time, max_time } = timeRestrictions;

  //     const newData: IFormData = Object.assign(data, {
  //       devicesIds,
  //       weekDays,
  //       time_limit,
  //       min_time,
  //       max_time,
  //       name: inputValue,
  //     });
  //     console.log(newData);

  //     await api.post(
  //       `/superunities/${superUnitId}/accesses/categories`,
  //       newData,
  //     );

  //     setLoading(false);
  //   },
  //   [superUnitId, weekDays, devices, inputValue, timeRestrictions],
  // );

  return (
    <Layout>
      <Header
        title={{ value: 'Convites', path: '/invites' }}
        subTitle={{ value: 'Adicionar Convite', path: '/invites/new' }}
        hasBackButton
      />
      <Container>
        <MainHeader>
          <h1>
            <FiList />
            Adicionar Convite
          </h1>
        </MainHeader>
        <Content>
          <form>
            <Input
              value={inputValue}
              onChange={handleChange}
              placeholder="Nome"
              type="text"
              name="name"
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
              value={invites}
              onChange={value => setInvites(value)}
            />

            <Button type="submit" icon={FiPlus} loading={loading}>
              Adicionar
            </Button>
          </form>
        </Content>
      </Container>
    </Layout>
  );
};

export default InviteAdd;
