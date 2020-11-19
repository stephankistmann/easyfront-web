import React, {
  ButtonHTMLAttributes,
  useState,
  useCallback,
  useRef,
} from 'react';
import useOnClickOutside from 'use-onclickoutside';
import userIcon from '../../assets/defaultUserIcon.png';
import { useAuth } from '../../hooks/auth';
import { Container, LogoutMenu } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const LogoutButton: React.FC<ButtonProps> = () => {
  const { signOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  const handleClick = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        <img src={user.avatar_url || userIcon} alt="UserIcon" />
      </button>
      {isMenuOpen && (
        <LogoutMenu type="button" ref={ref} onClick={signOut}>
          Logout
        </LogoutMenu>
      )}
    </Container>
  );
};

export default LogoutButton;
