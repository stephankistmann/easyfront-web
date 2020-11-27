import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  password?: string;
  rg?: string;
  cpf?: string;
  gender?: string;
  nature?: string;
  phone?: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password?: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Easyfront:token');
    const user = localStorage.getItem('@Easyfront:user');

    if (token) {
      api.defaults.headers.authorization = `bearer ${token}`;
    }
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('session', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Easyfront:token', token);
    localStorage.setItem('@Easyfront:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Easyfront:token');
    localStorage.removeItem('@Easyfront:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@Easyfront:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  useEffect(() => {
    api.defaults.headers.authorization = `bearer ${data.token}`;
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
