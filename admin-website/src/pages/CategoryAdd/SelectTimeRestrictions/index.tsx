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
  const [checked, setChecked] = useState<boolean>(false);

  const handleToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!checked) {
        onChange({ ...value, time_limit: true });
      } else {
        onChange({ time_limit: false, min_time: '00:00', max_time: '23:59' });
      }

      const checkedValue = event.target.checked === true;
      setChecked(checkedValue);
    },
    [value, onChange, checked],
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
        {/* <Switch
          checked={value.time_limit}
          onChange={handleToggle}
          onColor="#69aaf5"
          offColor="#ddd"
          checkedIcon={false}
          uncheckedIcon={false}
          height={22}
          width={40}
          // boxShadow="0 0 6px rgba(0, 0, 0, 0.4)"
        /> */}
        <input
          type="checkbox"
          name="time_limit"
          id="time_limit"
          checked={checked}
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
