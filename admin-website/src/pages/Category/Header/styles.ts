import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 20%;
  justify-content: space-between;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  margin: 24px;
  color: #2f4858;

  svg {
    margin-right: 16px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
  }

  button {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    margin: 0 4px 0 0;
    font-weight: 700;
    background: #ff6757;
    border: 1px solid #f3f3f3;
    color: #ffffff;
    transition: background-color 0.2s;

    &:hover {
      background: #2f4858;
    }
  }
`;
