import React from 'react';

import { Container, Item } from './styles';

interface ICheckWeekDay {
  value: boolean[];
  onChange(data: boolean[]): void;
}

const CheckWeekDay: React.FC<ICheckWeekDay> = ({ value, onChange }) => {
  function selectDay(day: number, event: React.ChangeEvent<HTMLInputElement>) {
    onChange(
      value.map((weekDay, index) =>
        index === day ? event.target.checked : weekDay,
      ),
    );
  }

  return (
    <Container>
      <Item>
        <p>Domingo</p>
        <input
          type="checkbox"
          checked={value[0]}
          onChange={event => selectDay(0, event)}
        />
      </Item>
      <Item>
        <p>Segunda-feira</p>
        <input
          type="checkbox"
          checked={value[1]}
          onChange={event => selectDay(1, event)}
        />
      </Item>
      <Item>
        <p>Terça-feira</p>
        <input
          type="checkbox"
          checked={value[2]}
          onChange={event => selectDay(2, event)}
        />
      </Item>
      <Item>
        <p>Quarta-feira</p>
        <input
          type="checkbox"
          checked={value[3]}
          onChange={event => selectDay(3, event)}
        />
      </Item>
      <Item>
        <p>Quinta-feira</p>
        <input
          type="checkbox"
          checked={value[4]}
          onChange={event => selectDay(4, event)}
        />
      </Item>
      <Item>
        <p>Sexta-feira</p>
        <input
          type="checkbox"
          checked={value[5]}
          onChange={event => selectDay(5, event)}
        />
      </Item>
      <Item>
        <p>Sábado</p>
        <input
          type="checkbox"
          checked={value[6]}
          onChange={event => selectDay(6, event)}
        />
      </Item>
    </Container>
  );
};

export default CheckWeekDay;
