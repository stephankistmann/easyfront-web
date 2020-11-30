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
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sc-hKgILt {
      margin-right: 16px;
    }
    .css-2b097c-container {
      margin-top: 0;
    }

    button {
      font-size: 22px;
      margin-top: 0;
      margin-left: 16px;
    }
  }
`;
