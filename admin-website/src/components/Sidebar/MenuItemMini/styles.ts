import styled, { css } from 'styled-components';
import { saturate } from 'polished';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: #ffffff;
  padding: 16px 0px 16px 0px;
  width: 25%;
  font-weight: 700;
  margin-left: 14px;
  margin-top: 16px;

  border: 0;
  color: #666360;

  display: flex;
  align-items: center;

  ${props =>
    props.isSelected &&
    css`
      color: #fff;
      background: #ff6757;

      border-radius: 8px;
    `}

  & + button {
    margin-top: 16px;
  }

  &:hover {
    background: ${saturate(0.1, '#ff6757')};
    color: #fff;
    border-radius: 8px;
  }

  svg {
    margin-right: 16px;
    margin-left: 24px;
  }
`;
