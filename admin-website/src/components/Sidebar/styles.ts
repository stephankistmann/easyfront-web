import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  a {
    width: 70%;
    margin: 16px 30px 30px 30px;

    img {
      width: 100%;
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

  & button:nth-child(7) {
    position: fixed;
    align-self: flex-end;
    margin-top: 40%;
  }
`;
