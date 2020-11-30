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

  form {
    display: flex;
    align-items: center;
    padding: 30px;
    flex: 1;

    .css-2b097c-container {
      margin-top: 0;
    }

    div {
      display: flex;
      :hover {
        color: #ff6757;
      }
    }

    button {
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 700;

      svg {
        margin-right: 16px;
      }
    }

    input {
      width: 250px;
      margin-right: 16px;
    }
  }
`;
