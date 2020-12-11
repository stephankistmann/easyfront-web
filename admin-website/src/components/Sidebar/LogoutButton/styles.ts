import styled from 'styled-components';
import { saturate } from 'polished';

export const Container = styled.div`
  button {
    background: transparent;
    padding: 16px;
    width: 100%;
    font-weight: 700;

    border: 0;
    color: #2f4858;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
      margin-left: 8px;
    }

    &:hover {
      filter: brightness(1.2);
      transition: 0.2s;
      border-radius: 10px;
    }
  }
`;
