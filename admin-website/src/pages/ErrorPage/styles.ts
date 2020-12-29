import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid #dfe9eb;
  background: #ffffff;
  flex-direction: column;
  width: 25%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  img {
    width: 300px;
  }

  span {
    margin: 30px;
  }

  button {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Title = styled.div`
  flex: 1;
  margin: 24px;
  color: #2f4858;

  svg {
    margin-right: 16px;
    margin-left: 4px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;

  border-radius: 8px;
  border: 1px solid #dfe9eb;
  background: #ffffff;

  width: 25%;
`;
