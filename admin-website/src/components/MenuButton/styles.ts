import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #f3f3f3;
  border: transparent;
  border-radius: 10px;
  &:hover {
    background: ${shade(0.2, '#f3f3f3')};
  }
`;
