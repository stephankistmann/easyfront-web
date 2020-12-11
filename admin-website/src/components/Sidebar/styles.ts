import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;

  a {
    width: 70%;
    margin: 16px 30px 30px 30px;

    img {
      height: 48px;
    }
  }

  p {
    font-weight: 700;
    margin-left: 45px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    margin: 16px 0px 0px 30px;
    width: 85%;
  }

  a + a {
    margin-top: 16px;
  }

  div {
    margin: 16px 0px 0px 30px;
    width: 85%;
  }

  & button:nth-child(9) {
    position: fixed;
    align-self: flex-end;
    margin-top: 38%;
  }
`;

export const LogoutButton = styled.div`
  background: #ffffff;
  padding: 16px;
  width: 100%;
  font-weight: 700;

  border: 0;
  color: #2f4858;

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
    margin-left: 8px;
  }
`;
