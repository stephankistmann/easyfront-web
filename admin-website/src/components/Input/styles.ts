import styled, { css } from 'styled-components';

import Tooltip from './Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666360;
  height: 54px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  :hover {
    border-color: #ff6757;
  }

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
      border: 1px solid #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff6757;
      border: 1px solid #ff6757;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #2f4858;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
`;
