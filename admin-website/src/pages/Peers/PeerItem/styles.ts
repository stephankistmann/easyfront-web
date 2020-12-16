import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  width: 25%;

  img {
    width: 32px;
    height: 32px;
    margin: 0 16px;
  }

  h1 {
    font-size: 14px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    margin-top: 4px;
  }
`;

export const Contact = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;

  div {
    width: 50%;
    height: 28px;
    padding: 0 24px;
    border-radius: 4px;
    background: rgb(224, 249, 224);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      height: 14px;
      width: 14px;
      margin-right: 8px;
      color: #2f4858;
    }

    h1 {
      font-size: 14px;
      font-weight: 700;
    }

    div {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #2f4858;
      margin: 8px;
      opacity: 0.6;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Extra = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;

  > div {
    width: 75%;
    height: 28px;
    padding: 0 24px;
    border-radius: 4px;
    background: rgb(226, 242, 255);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 14px;
      width: 14px;
      margin-right: 8px;
      color: #2f4858;
    }

    h1 {
      font-size: 14px;
      font-weight: 700;
    }

    div {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #2f4858;
      margin: 8px;
      opacity: 0.6;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;

  button {
    background: transparent;
    border: 0;

    svg {
      height: 16px;
      width: 16px;
      margin-right: 8px;
      color: #2f4858;
    }
  }
`;
