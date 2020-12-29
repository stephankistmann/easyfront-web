import React, { useCallback, useMemo } from 'react';
import { BiDevices } from 'react-icons/bi';
import { FiCheck, FiX } from 'react-icons/fi';
import {
  Container,
  Selecteds,
  Unselecteds,
  DeviceSelected,
  DeviceSelectedInfos,
  DeviceUnselected,
} from './styles';

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
  const selected = useMemo(() => value.filter(device => device.selected), [
    value,
  ]);
  const unselected = useMemo(() => value.filter(device => !device.selected), [
    value,
  ]);

  const handleSelect = useCallback(
    (id: string) => {
      const index = value.findIndex(device => device.id === id);
      const data = { ...value[index], selected: true };
      onChange([...value.filter(device => device.id !== id), data]);
    },
    [value, onChange],
  );

  const handleUnselect = useCallback(
    (id: string) =>
      onChange(
        value.map(device =>
          device.id === id ? { ...device, selected: false } : device,
        ),
      ),
    [value, onChange],
  );

  return (
    <Container>
      {selected.length !== 0 && (
        <Selecteds>
          <h1>Dispositivos selecionados</h1>
          <div>
            {selected.map(device => (
              <DeviceSelected
                key={device.id}
                onClick={() => handleUnselect(device.id)}
              >
                <DeviceSelectedInfos>
                  <BiDevices />
                  <p>{device.name}</p>
                </DeviceSelectedInfos>
                <span>
                  <FiX size={10} />
                  <FiCheck size={10} />
                </span>
              </DeviceSelected>
            ))}
          </div>
        </Selecteds>
      )}

      <Unselecteds>
        <h1>Selecione os dispositivos que a categoria ira ter acesso</h1>
        <div>
          {unselected.map(device => (
            <DeviceUnselected
              key={device.id}
              onClick={() => handleSelect(device.id)}
            >
              <BiDevices />
              <p>{device.name}</p>
            </DeviceUnselected>
          ))}
        </div>
        {unselected.length === 0 && (
          <p>A categoria tera acesso a todos os dipositivos</p>
        )}
      </Unselecteds>
    </Container>
  );
};

export default SelectDevices;
