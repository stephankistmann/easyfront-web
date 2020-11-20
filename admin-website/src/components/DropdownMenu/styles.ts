import { invert } from 'polished';
import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  height: 56px;
  margin-bottom: 8px;
  :hover {
    background: ${invert('#d0b7a7')};
    color: #fff;
  }

  :first-child {
    border-radius: 10px 10px 0 0;
  }

  :last-child {
    margin-bottom: 0;
    border-radius: 0 0 10px 10px;
  }
`;
