import React, { useCallback, useMemo } from 'react';
import { BiDevices } from 'react-icons/bi';
import { FiCheck, FiX } from 'react-icons/fi';
import { Container, Content, Device } from './styles';

interface IDevice {
  name: string;
  id: string;
  selected: boolean;
}

interface IProps {
  value: IDevice[];
  onChange: (data: IDevice[]) => void;
}

const SelectDevices: React.FC<IProps> = ({ value, onChange }) => {
  const handleToggle = useCallback(
    (id: string) => {
      onChange(
        value.map(device =>
          device.id === id ? { ...device, selected: !device.selected } : device,
        ),
      );
    },
    [value, onChange],
  );

  return (
    <Container>
      <h1>Selecione os dispositivos que a categoria irá ter acesso:</h1>
      <Content>
        {value.map(device => (
          <Device
            key={device.id}
            onClick={() => handleToggle(device.id)}
            selected={device.selected}
          >
            <div>
              <BiDevices />
              <p>{device.name}</p>
            </div>
            {device.selected && (
              <span>
                <FiX size={10} />
                <FiCheck size={10} />
              </span>
            )}
          </Device>
        ))}
      </Content>
    </Container>
  );
};

export default SelectDevices;
