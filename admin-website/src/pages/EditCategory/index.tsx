import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { FiClock, FiList, FiPlus } from 'react-icons/fi';
import {
  Container,
  FormContainer,
  CheckboxContainer,
  ScheduleContainer,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InputMask from '../../components/InputMask';
import MainHeader from '../../components/MainHeader';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Layout from '../../components/Layout';
import { useSuperunit } from '../../hooks/superunit';
import CheckboxInput from '../../components/CheckboxInput';
import CheckWeekDay from '../../components/CheckWeekDay';

interface IFormData {
  name: string;
  weekDays: boolean[];
  checked: boolean;
  min_time: string;
  max_time: string;
  time_limit: boolean;
  devicesIds: string[];
  checkbox?: string[];
}

interface CheckboxOption {
  name: string;
  id: string;
  value: string;
}

const EditCategory: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { id }: { id: string } = useParams();
  const { addToast } = useToast();
  const { selected } = useSuperunit();
  const [timeLimit, setTimeLimit] = useState(false);
  const [weekDays, setWeekDays] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [devices, setDevices] = useState<CheckboxOption[]>([]);

  const superunitId = selected?.id;

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/superunities/${superunitId}/devices`);
      setDevices(response.data.data);
    }

    getData();
  }, [superunitId]);

  const newData = devices.map(device => {
    return {
      ...device,
      id: device.id,
      value: device.id,
      label: device.name,
    };
  });

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      /* eslint-disable no-param-reassign */
      if (data.min_time || data.max_time) {
        data.time_limit = true;
      } else {
        data.time_limit = false;
      }

      if (!data.time_limit) {
        data.min_time = '00:00';
        data.max_time = '00:00';
      }

      formRef.current?.setErrors({});

      const newResponse: IFormData = Object.assign(data, {
        devicesIds: data.checkbox,
        weekDays,
      });

      delete data.checkbox;

      console.log(newResponse);

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          min_time: Yup.string(),
          max_time: Yup.string(),
          devicesIds: Yup.array()
            .of(Yup.string())
            .required('Dispositivo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(
          `/superunities/${superunitId}/accesscategories/${id}`,
          newResponse,
        );

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Categoria cadastrada com sucesso.',
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
        <MainHeader name="Editar categoria" icon={FiList} />
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" />
            <CheckboxContainer>
              <CheckWeekDay value={weekDays} onChange={setWeekDays} />
            </CheckboxContainer>
            <CheckboxContainer>
              {newData && <CheckboxInput name="checkbox" options={newData} />}
            </CheckboxContainer>
            <ScheduleContainer>
              <label>
                <input
                  type="checkbox"
                  name="time_limit"
                  id="Restrição de horário"
                  checked={timeLimit}
                  onChange={() => setTimeLimit(!timeLimit)}
                />
                <span>Restrição de horário</span>
              </label>
              {timeLimit && (
                <div>
                  <InputMask
                    icon={FiClock}
                    name="min_time"
                    mask="99:99"
                    placeholder="Horário de inicio"
                  />
                  <InputMask
                    icon={FiClock}
                    name="max_time"
                    mask="99:99"
                    placeholder="Horário de término"
                  />
                </div>
              )}
            </ScheduleContainer>

            <Button type="submit" name="AddButton">
              Atualizar
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </Layout>
  );
};

export default EditCategory;
