import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 150px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #dfe9eb;
  font-size: 18px;

  ${props =>
    props.isFocused &&
    css`
      color: #ff6757;
      border: 1px solid #ff6757;
    `}
`;
