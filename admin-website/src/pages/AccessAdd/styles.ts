import styled from 'styled-components';
import Select from '../../components/Select';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 50, 0.1);
  background: #ffffff;
  flex-direction: column;
  padding: 24px;
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
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;

  form {
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    flex: 1;
    width: 100%;

    > div {
      margin-top: 16px;
      width: 100%;
    }

    button {
      margin-top: 16px;
    }
  }
`;
