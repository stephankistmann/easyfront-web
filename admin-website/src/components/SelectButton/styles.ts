import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  flex: 1;
  background: #ff6757;
  height: 56px;
  border-radius: 10px;
  border: 0;
  color: #ffffff;
  font-weight: 500;
  transition: background-color 0.2s;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${shade(0.2, '#ff6757')};
  }

  svg {
    margin-right: 24px;
  }
`;
