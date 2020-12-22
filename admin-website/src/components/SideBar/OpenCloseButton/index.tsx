import React from 'react';

import { Container, Line } from './styles';

interface IProps {
  onClick: () => void;
  open: boolean;
}

const OpenCloseButton: React.FC<IProps> = ({ open, onClick }) => {
  return (
    <Container onClick={onClick} open={open}>
      <Line />
      <Line />
      <Line />
    </Container>
  );
};

export default OpenCloseButton;
