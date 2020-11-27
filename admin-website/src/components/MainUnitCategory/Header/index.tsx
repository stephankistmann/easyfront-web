import React from 'react';
import { IconBaseProps } from 'react-icons';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import { Container, Title } from './styles';

interface HeaderProps {
  icon: React.ComponentType<IconBaseProps>;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ icon: Icon, name }) => (
  <Container>
    <Title>
      {Icon && <Icon size={26} />}
      <h1>{name}</h1>
      <Link to="/units/category/new">
        <Button icon={FiPlus} name="AddCategoryButton">
          Adicionar unidade
        </Button>
      </Link>
    </Title>
  </Container>
);

export default Header;
