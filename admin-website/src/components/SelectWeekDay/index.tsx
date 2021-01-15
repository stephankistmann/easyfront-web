import React, { useCallback, useState } from 'react';
import { Container, SelectRestriction, WeekDay, Content } from './styles';

interface IProps {
  value: boolean[];
  onChange(data: boolean[]): void;
}

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const SelectWeekDay: React.FC<IProps> = ({ value, onChange }) => {
  const [restriction, setRestriction] = useState<boolean>(false);

  const handleToggleWeekDay = useCallback(
    index => {
      onChange(
        value.map((weekDay, weekDayIndex) =>
          weekDayIndex === index ? !weekDay : weekDay,
        ),
      );
    },
    [value, onChange],
  );

  const handleToggleRestriction = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!restriction) {
      onChange([true, true, true, true, true, true, true]);
    }
    const checkedValue = event.target.checked === true;

    setRestriction(checkedValue);
  };

  return (
    <Container>
      <SelectRestriction>
        <p>Restrição de dias</p>
        <input
          type="checkbox"
          name="weekDays"
          id="weekDays"
          checked={restriction}
          onChange={handleToggleRestriction}
        />
      </SelectRestriction>
      {restriction && (
        <Content>
          {weekDays.map((weekDay, index) => (
            <WeekDay
              key={`${weekDay} - ${Math.random()}`}
              selected={value[index]}
              onClick={() => handleToggleWeekDay(index)}
            >
              <p>{weekDay}</p>
            </WeekDay>
          ))}
        </Content>
      )}
    </Container>
  );
};

export default SelectWeekDay;
