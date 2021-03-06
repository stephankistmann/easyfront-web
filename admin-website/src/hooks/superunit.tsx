import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  loading: boolean;
}

const SuperunitContext = createContext<ISuperUnitContext>(
  {} as ISuperUnitContext,
);

const SuperunitProvider: React.FC = ({ children }) => {
  const { token } = useAuth();
  const [superunities, setSuperunities] = useState<ISuperUnit[]>([]);
  const [selected, setSelected] = useState<ISuperUnit>();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  async function selectSuperunit(id: string) {
    setSelected(superunities.find(superunit => superunit.id === id));
    history.push('/dashboard');
  }

  useEffect(() => {
    async function getData() {
      if (token) {
        setLoading(true);
        const response = await api.get('/manager/superunities');

        setSuperunities(response.data);

        if (response.data.length === 0) {
          history.push('/error');
        }
        setSelected(response.data[0]);
        setLoading(false);
      }
    }

    getData();
  }, [token, history]);

  return (
    <SuperunitContext.Provider
      value={{ superunities, selected, selectSuperunit, loading }}
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
