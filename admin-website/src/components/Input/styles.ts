import styled, { css } from 'styled-components';

import Tooltip from './Tooltip';

interface ContainerProps {
  isFocused: boolean;
  // isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border: 1px solid #dfe9eb;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  color: #666360;
  height: 48px;

  display: flex;
  align-items: center;

  :hover {
    border-color: #69aaf5;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #69aaf5;
      border: 1px solid #69aaf5;
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
