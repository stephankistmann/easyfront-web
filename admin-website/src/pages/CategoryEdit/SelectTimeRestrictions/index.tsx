import React, { useCallback, useState } from 'react';
// import Switch from 'react-switch';
import { Container, SelectSchedule, Content } from './styles';

interface ITimeRestrictions {
  time_limit: boolean;
  min_time: string;
  max_time: string;
}

interface IProps {
  value: ITimeRestrictions;
  onChange: (value: ITimeRestrictions) => void;
}

const SelectTimeRestrictions: React.FC<IProps> = ({ value, onChange }) => {
  const handleToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!value.time_limit) {
        onChange({ ...value, time_limit: true });
      } else {
        onChange({ time_limit: false, min_time: '00:00', max_time: '23:59' });
      }
    },
    [value, onChange],
  );

  const handleMinTime = useCallback(
    event => {
      if (value.time_limit) {
        onChange({ ...value, min_time: event.target.value });
      }
    },
    [value, onChange],
  );

  const handleMaxTime = useCallback(
    event => {
      if (value.time_limit) {
        onChange({ ...value, max_time: event.target.value });
      }
    },
    [value, onChange],
  );

  return (
    <Container>
      <SelectSchedule>
        <p>Definir restrição de horário</p>
        <input
          type="checkbox"
          name="time_limit"
          id="time_limit"
          checked={value.time_limit}
          onChange={handleToggle}
        />
      </SelectSchedule>
      {value.time_limit && (
        <Content>
          {value.time_limit && (
            <>
              <input
                onChange={handleMinTime}
                value={value.min_time}
                type="time"
              />
              <p>-</p>
              <input
                onChange={handleMaxTime}
                value={value.max_time}
                type="time"
              />
            </>
          )}
        </Content>
      )}
    </Container>
  );
};

export default SelectTimeRestrictions;
