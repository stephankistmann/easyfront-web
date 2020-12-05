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
  flex: 1;
  justify-content: space-between;

  form {
    display: flex;
    align-items: center;
    padding: 30px;
    flex: 1;

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
      width: 100%;
      font-weight: 700;

      svg {
        margin-right: 16px;
      }
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 30px;

  label {
    margin-top: 16px;

    :first-child {
      margin-top: 0;
    }
  }
`;

export const ScheduleContainer = styled.div`
  margin-right: 30px;
`;
