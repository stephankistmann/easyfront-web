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
  color: #2f4858;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: 0.4s;
  background: transparent;
  border-radius: 8px;

  ${props =>
    props.isSelected &&
    css`
      color: #fff;
      background: linear-gradient(35deg, #ff6757, #ff7957);
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
