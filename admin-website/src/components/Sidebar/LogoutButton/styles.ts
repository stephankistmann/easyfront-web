import styled from 'styled-components';
import { saturate } from 'polished';

export const Container = styled.div`
  button {
    background: #ffffff;
    padding: 16px;
    width: 100%;
    font-weight: 700;

    border: 0;
    color: #666360;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
      margin-left: 8px;
    }

    &:hover {
      background: ${saturate(0.1, '#ff6757')};
      color: #fff;
      border-radius: 10px;
    }
  }
`;
