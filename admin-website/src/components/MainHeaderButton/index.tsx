import React from 'react';
import { IconBaseProps } from 'react-icons';
import { FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Container, Title } from './styles';

interface HeaderButtonProps {
  icon: React.ComponentType<IconBaseProps>;
  name: string;
  buttonName?: string;
  buttonLink?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  icon: Icon,
  name,
  buttonName,
  buttonLink,
}) => (
  <Container>
    <Title>
      {Icon && <Icon size={26} />}
      <h1>{name}</h1>
      <Link to={`${buttonLink}`}>
        <Button icon={FiList} name="NewCategory">
          {buttonName}
        </Button>
      </Link>
    </Title>
  </Container>
);

export default HeaderButton;
