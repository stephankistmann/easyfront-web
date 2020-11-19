import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  margin-bottom: 16px;

  &:hover {
    background: #ff6757;
    color: #ffffff;
  }
`;
