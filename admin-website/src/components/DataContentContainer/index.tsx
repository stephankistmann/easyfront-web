import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, Content, Header } from './styles';

interface DataContentContainerProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const DataContentContainer: React.FC<DataContentContainerProps> = ({
  name,
  icon: Icon,
  children,
}) => (
  <Container>
    <Header>
      {Icon && <Icon size={20} />}
      <span>{name}</span>
    </Header>
    <Content>{children}</Content>
  </Container>
);

export default DataContentContainer;
