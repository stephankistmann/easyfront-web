import styled from 'styled-components';
import { invert } from 'polished';

export const Container = styled.button`
  background: #ff6757;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  margin-top: 16px;

  &:hover {
    background: ${invert('#d0b7a7')};
  }
`;
