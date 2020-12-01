import React, { useRef, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiClock, FiPlus } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import Checkbox from '../Checkbox';
import {
  Container,
  FormContainer,
  CheckboxContainer,
  ScheduleContainer,
} from './styles';
import Header from './Header';
import Input from '../Input';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import InputMask from '../InputMask';

interface INewCategoryProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const NewCategory: React.FC<INewCategoryProps> = ({ name, icon: Icon }) => {
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
    <Container>
      <Header name={name} icon={Icon} />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormContainer>
            <Input name="name" placeholder="Nome" />
            <CheckboxContainer>
              <Checkbox name="monday" id="Segunda-Feira" />
              <Checkbox name="tuesday" id="Terça-Feira" />
              <Checkbox name="wednesday" id="Quarta-Feira" />
              <Checkbox name="thursday" id="Quinta-Feira" />
              <Checkbox name="friday" id="Sexta-Feira" />
              <Checkbox name="saturday" id="Sábado" />
              <Checkbox name="sunday" id="Domingo" />
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox name="entrance1" id="Entrada 1" />
              <Checkbox name="entrance2" id="Entrada 2" />
              <Checkbox name="exit1" id="Saída 1" />
              <Checkbox name="exit2" id="Saída 2" />
              <Checkbox name="hall" id="Hall" />
              <Checkbox name="garage" id="Garagem" />
            </CheckboxContainer>
            <ScheduleContainer>
              <InputMask
                icon={FiClock}
                name="schedule1"
                mask="99:99"
                placeholder="Horário de inicio"
              />
              <InputMask
                icon={FiClock}
                name="schedule2"
                mask="99:99"
                placeholder="Horário de término"
              />
            </ScheduleContainer>

            <Button type="submit" icon={FiPlus} name="AddButton">
              Adicionar
            </Button>
          </FormContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default NewCategory;
