import React, { useMemo } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Navigation,
  NavButton,
  TitleContainer,
  Title,
  SubTitle,
  Left,
  Profile,
} from './styles';
import SuperUnitSelect from './SuperUnitSelect';
import { useAuth } from '../../hooks/auth';

interface ITitle {
  value: string;
  path: string;
}

interface IProps {
  hasBackButton?: boolean;
  title: ITitle;
  subTitle?: ITitle;
}

const Header: React.FC<IProps> = ({ hasBackButton, title, subTitle }) => {
  const { user } = useAuth();
  const history = useHistory();

  const initials = useMemo(() => user.name.slice(0, 2).toUpperCase(), [user]);

  return (
    <Container>
      <Navigation>
        <NavButton disabled={!hasBackButton} onClick={() => history.goBack()}>
          {hasBackButton ? (
            <FiChevronLeft size={18} color="#2f4858" />
          ) : (
            <BsDot size={30} color="#939da3" />
          )}
        </NavButton>

        <TitleContainer>
          <Title to={title.path}>{title.value}</Title>
          {subTitle && (
            <>
              <div />
              <SubTitle to={subTitle.path}>{subTitle.value}</SubTitle>
            </>
          )}
        </TitleContainer>
      </Navigation>
      <Left>
        <Profile to="/profile">
          <div />
          {user.avatar_url ? (
            <img src={user.avatar_url} alt="Usuário" />
          ) : (
            <h1>{initials}</h1>
          )}
        </Profile>
        <SuperUnitSelect />
      </Left>
    </Container>
  );
};

export default Header;
