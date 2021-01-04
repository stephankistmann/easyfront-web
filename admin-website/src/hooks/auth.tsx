import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
// import { useToast } from './toast';

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
  active: boolean;
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
  const history = useHistory();
  // const { addToast } = useToast();
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

  const signIn = useCallback(
    async ({ email, password }) => {
      // try {
      const response = await api.post('session', {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.authorization = `bearer ${token}`;

      localStorage.setItem('@Easyfront:token', token);
      localStorage.setItem('@Easyfront:user', JSON.stringify(user));

      if (user.active !== true) history.push('/error');

      setData({ token, user });
      // } catch (error) {
      //   if (error.response.data.content.code === 1) {
      //     console.log(error);
      //   }
      // if (error.response.data.content.code === 0) {
      //   addToast({
      //     type: 'error',
      //     title: 'Erro ao efetuar login',
      //     description: 'Ocorreu um erro ao efetuar login, cheque seu e-mail.',
      //   });
      // }
      // if (error.response.data.content.code === 1) {
      //   addToast({
      //     type: 'error',
      //     title: 'Erro na autenticação',
      //     description: 'Usuário não confirmado, por favor cheque seu e-mail.',
      //   });
      // }
      // if (error.response.data.content.code === 2) {
      //   addToast({
      //     type: 'error',
      //     title: 'Erro na autenticação',
      //     description: 'Dados inválidos, tente novamente.',
      //   });
      // }
      // }
    },
    [history],
  );

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
