import React from 'react';
import { IconBaseProps } from 'react-icons';
import { useAuth } from '../../../hooks/auth';
import { Container } from './styles';

interface LogoutButtonProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Logout: React.FC<LogoutButtonProps> = ({ name, icon: Icon }) => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <button type="button" onClick={signOut}>
        {Icon && <Icon size={24} />}
        {name}
      </button>
    </Container>
  );
};

export default Logout;
