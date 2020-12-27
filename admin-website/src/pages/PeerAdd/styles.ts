import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #fff;
  padding: 24px;
  box-shadow: 0 0 15px rgba(0, 0, 50, 0.1);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    button {
      margin-top: 8px;
      height: 48px;
      align-self: flex-end;
    }

    > div {
      margin-right: 16px;
    }

    input {
      margin-right: 16px;
    }
  }
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
