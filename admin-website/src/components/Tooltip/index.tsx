import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  direction?: string;
  width: number;
  height: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  direction,
  width,
  height,
}) => {
  return (
    <Container width={width} height={height} direction={direction}>
      <FiHelpCircle style={{ margin: 0 }} size={18} />
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
