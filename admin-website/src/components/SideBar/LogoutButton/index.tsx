import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../../hooks/auth';
import { Container, Button } from './styles';

const LogoutButton: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Button type="button" onClick={signOut}>
      <Container>
        <FiLogOut size={20} />
        <p>Logout</p>
      </Container>
    </Button>
  );
};

export default LogoutButton;
