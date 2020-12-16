import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #fff;
  padding: 24px;
  box-shadow: 0 0 15px rgba(0, 0, 50, 0.1);
`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

    h1 {
      font-size: 18px;
      align-items: center;
      display: flex;
      margin-left: 8px;
      margin-right: 24px;

      svg {
        margin-right: 12px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    padding: 30px;
    flex: 1;
    position: relative;

    main {
      display: flex;

      .css-2b097c-container {
        margin-top: 0;
      }

      .sc-hKgILt.kunJfp {
        width: 350px;
      }

      .sc-hKgILt.kQSoJa {
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
      }

      .sc-jSgupP.fVAFW {
        width: 300px;
      }

      button {
        display: flex;
        margin: 0;
        align-items: center;
        justify-content: center;
        width: 25%;
        font-weight: 700;
        position: absolute;
        right: 30px;

        svg {
          margin-right: 16px;
        }
      }
    }
  }
`;

export const CheckboxContainer = styled.div`
  div {
    margin-left: 30px;
    margin-right: 30px;
  }
  label {
    margin-top: 16px;
    margin-right: 30px;

    :first-child {
      margin-top: 0;
    }

    input {
      margin-right: 8px;
    }
  }
`;

export const ScheduleContainer = styled.div`
  margin-right: 30px;
  width: 300px;

  label {
    align-items: center;
  }

  span {
    margin-right: 8px;
  }

  input {
    margin-right: 8px;
  }

  div {
    margin-top: 16px;
  }
`;
