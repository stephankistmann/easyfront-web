import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerProps>`
  padding: 16px;
  width: 100%;
  font-weight: 700;
  background: transparent;

  border: 0;
  color: #2f4858;

  display: flex;
  align-items: center;

  ${props =>
    props.isSelected &&
    css`
      color: #fff;
      background: #ff6757;

      border-radius: 10px;
    `}

  &:hover {
    filter: brightness(1.2);
    transition: 0.2s;
    border-radius: 10px;
  }

  svg {
    margin-right: 16px;
    margin-left: 8px;
  }
`;
