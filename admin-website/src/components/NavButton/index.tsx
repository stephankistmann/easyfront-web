import React from 'react';
import { IconBaseProps } from 'react-icons';
import { useHistory } from 'react-router';
import { Container } from './styles';

interface NavButtonProps {
  icon: React.ComponentType<IconBaseProps>;
}

const NavButton: React.FC<NavButtonProps> = ({ icon: Icon }) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <Container onClick={handleClick}>{Icon && <Icon size={24} />}</Container>
  );
};

export default NavButton;
