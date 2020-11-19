import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 56px;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;

  input {
    border: 0;
    width: 220px;
    font-size: 18px;
    color: #2f4858;
  }

  svg {
    margin-left: 16px;
    color: #999fa3;
  }

  button {
    margin-right: 16px;
    color: #ff6757;
    font-weight: 700;
    background: transparent;
    border: 0;
    border-left: 1px solid #dfe9eb;
    width: 100px;
  }
`;
