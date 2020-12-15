import React, { useMemo } from 'react';
import { FiChevronLeft, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Navigation,
  NavButton,
  Title,
  Left,
  Profile,
} from './styles';
import SuperUnitSelect from './SuperUnitSelect';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  const initials = useMemo(() => user.name.slice(0, 2).toUpperCase(), [user]);

  return (
    <Container>
      <Navigation>
        <NavButton onClick={() => history.goBack()}>
          <FiChevronLeft size={18} color="#2f4858" />
        </NavButton>
        <Title>
          <h1>Parceiros</h1>
          <div />
          <p>Novo parceiro</p>
        </Title>
      </Navigation>
      <Left>
        <Profile>
          {user.avatar_url ? (
            <Link to="/profile">
              <img src={user.avatar_url} alt="Usuário" />
            </Link>
          ) : (
            <Link to="/profile">
              <h1>{initials}</h1>
            </Link>
          )}
        </Profile>
        <SuperUnitSelect />
      </Left>
    </Container>
  );
};

export default Header;
