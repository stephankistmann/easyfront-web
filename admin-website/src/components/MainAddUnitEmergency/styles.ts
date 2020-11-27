import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #dfe9eb;
  background: #ffffff;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    div {
      margin-top: 0;
      margin-right: 16px;

    }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 54px;
        font-size: 22px;
        margin: 0;

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const FormSteps = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  height: 56px;
  justify-content: space-between;

  button {
    width: 49.5%;
    margin-top: 0;
    color: #2f4858;
    background: #fff;
    border: 1px solid #dfe9eb;
    font-size: 22px;

    :hover {
      color: #fff;
      background: #ff6757;
    }

    :nth-child(2) {
      border: 1px solid #ff6757;
    }
  }
`;
