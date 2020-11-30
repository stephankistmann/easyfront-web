import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #dfe9eb;
  background: #ffffff;
  flex-direction: column;
`;

export const DeleteContainer = styled.div`
  display: flex;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;

  align-items: center;

  div {
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-around;

    height: 64px;
    border: 1px solid #dfe9eb;
    border-radius: 10px;
    margin-top: 8px;

    span {
      margin-right: 30px;
      font-weight: 700;
      font-size: 18px;
    }
  }

  button {
    width: 25%;
    font-size: 22px;
    margin-top: 0;
    margin-left: 16px;
  }
`;
