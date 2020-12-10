import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from './auth';

interface ISuperUnit {
  id: string;
  name: string;
}

interface ISuperUnitContext {
  superunities: ISuperUnit[];
  selected: ISuperUnit | undefined;
  selectSuperunit(s: Object): void;
}

const SuperunitContext = createContext<ISuperUnitContext>(
  {} as ISuperUnitContext,
);

const SuperunitProvider: React.FC = ({ children }) => {
  const { token } = useAuth();
  const [superunities, setSuperunities] = useState<ISuperUnit[]>([]);
  const [selected, setSelected] = useState<ISuperUnit>();
  const [load, setLoad] = useState(true);

  async function selectSuperunit(id: string) {
    setSelected(superunities.find(superunit => superunit.id === id));
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get('/manager/superunities');

      setSuperunities(response.data);

      setSelected(response.data[0]);

      setLoad(false);
    }

    getData();
  }, [token]);

  return (
    <SuperunitContext.Provider
      value={{ superunities, selected, selectSuperunit }}
    >
      {children}
    </SuperunitContext.Provider>
  );
};

function useSuperunit(): ISuperUnitContext {
  const context = useContext(SuperunitContext);

  if (!context) {
    throw new Error('useSuperunit must be used within an AuthProvider');
  }

  return context;
}

export { SuperunitProvider, useSuperunit };
