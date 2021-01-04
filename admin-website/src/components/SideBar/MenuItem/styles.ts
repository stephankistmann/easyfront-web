import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerProps>`
  position: relative;
  height: 56px;
  width: 100%;
  font-weight: 700;
  background: transparent;
  padding: 13px;
  border: 0;
  color: #0e0e2c;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: 0.4s;
  background: transparent;
  border-radius: 8px;

  svg {
    color: #0e0e2c;
  }

  ${props =>
    props.isSelected &&
    css`
      color: #fff;
      background: linear-gradient(40deg, #f66253, #f19486);

      svg {
        color: #fff;
      }
    `}
  ${props =>
    !props.isSelected &&
    css`
      &:hover {
        filter: brightness(1.3);
      }
    `}

  &:active {
    transform: scale(0.95);
  }
  p {
    margin-left: 40px;
    transition: 0.4s;
  }

  svg {
    margin-left: 4px;
    position: absolute;
    left: 12px;
  }
`;
