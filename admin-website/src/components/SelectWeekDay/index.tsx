import React, { useCallback, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { Container, SelectRestriction, WeekDay, Content } from './styles';

interface IProps {
  value: boolean[];
  onChange(data: boolean[]): void;
}

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const SelectWeekDay: React.FC<IProps> = ({ value, onChange }) => {
  const [restriction, setRestriction] = useState<boolean>(false);

  const handleToogleWeekDay = useCallback(
    index => {
      onChange(
        value.map((weekDay, weekDayIndex) =>
          weekDayIndex === index ? !weekDay : weekDay,
        ),
      );
    },
    [value, onChange],
  );

  useEffect(() => {
    if (!restriction) {
      onChange([true, true, true, true, true, true, true]);
    }
  }, [restriction, onChange]);

  return (
    <Container>
      <SelectRestriction>
        <p>Restrição de dias</p>
        <Switch
          checked={restriction}
          onChange={checked => setRestriction(checked)}
          onColor="#69aaf5"
          offColor="#ddd"
          checkedIcon={false}
          uncheckedIcon={false}
          height={22}
          width={40}
          // boxShadow="0 0 6px rgba(0, 0, 0, 0.4)"
        />
      </SelectRestriction>
      {restriction && (
        <Content>
          {weekDays.map((weekDay, index) => (
            <WeekDay
              key={`${weekDay} - ${Math.random()}`}
              selected={value[index]}
              onClick={() => handleToogleWeekDay(index)}
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
