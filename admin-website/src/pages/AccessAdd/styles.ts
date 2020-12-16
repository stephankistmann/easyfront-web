import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 50, 0.1);
  background: #ffffff;
  flex-direction: column;
  padding: 24px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;

  form {
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    flex: 1;

    > div {
      margin-top: 16px;
    }

    button {
      margin-top: 16px;
    }

    /* .css-2b097c-container {
      width: 100%;
      margin-top: 8px;
    }

    .css-2b097c-container {
      margin-top: 0;
    }

    .css-26l3qy-menu {
      width: 100%;
    }

    .sc-hKgILt.kunJfp {
      width: 350px;
    }

    .kunJfp + div {
      margin-top: 0px;
    }

    .kQSoJa + div {
      margin-top: 0px;
    }

    label {
      display: flex;
      :hover {
        color: #ff6757;
      }
    } */
  }
`;
