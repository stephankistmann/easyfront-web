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

    .sc-hKgILt {
      margin-right: 8px;
    }

    .sc-jONnTn {
      margin-top: 0;
      margin-right: 8px;
    }

    .sc-aemoO {
      margin-top: 0;
      margin-right: 8px;
    }

    button {
      width: 84px;
      font-size: 18px;
      margin-top: 0;
    }
  }
`;
