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
        <input
          type="checkbox"
          checked={value[0]}
          onChange={event => selectDay(0, event)}
        />
        <p>Domingo</p>
      </Item>
      <Item>
        <input
          type="checkbox"
          checked={value[1]}
          onChange={event => selectDay(1, event)}
        />
        <p>Segunda-feira</p>
      </Item>
      <Item>
        <input
          type="checkbox"
          checked={value[2]}
          onChange={event => selectDay(2, event)}
        />
        <p>Terça-feira</p>
      </Item>
      <Item>
        <input
          type="checkbox"
          checked={value[3]}
          onChange={event => selectDay(3, event)}
        />
        <p>Quarta-feira</p>
      </Item>
      <Item>
        <input
          type="checkbox"
          checked={value[4]}
          onChange={event => selectDay(4, event)}
        />
        <p>Quinta-feira</p>
      </Item>
      <Item>
        <input
          type="checkbox"
          checked={value[5]}
          onChange={event => selectDay(5, event)}
        />
        <p>Sexta-feira</p>
      </Item>
      <Item>
        <input
          type="checkbox"
          checked={value[6]}
          onChange={event => selectDay(6, event)}
        />
        <p>Sábado</p>
      </Item>
    </Container>
  );
};

export default CheckWeekDay;
