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
  width: 50%;
  display: flex;

  div {
    display: flex;

    svg {
      margin-right: 16px;
      margin-left: 16px;
      width: 20px;
      height: 20px;
      color: #2f4858;
    }

    h1 {
      font-size: 14px;
    }
  }
`;

export const Area = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 25%;

  div {
    display: flex;

    svg {
      margin-right: 16px;
      margin-left: 16px;
      width: 20px;
      height: 20px;
      color: #2f4858;
    }

    h1 {
      font-size: 14px;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;

  a {
    text-decoration: none;
    svg {
      height: 16px;
      width: 16px;
      margin-right: 16px;
      color: #2f4858;
    }
  }

  button {
    background: transparent;
    border: 0;

    svg {
      height: 16px;
      width: 16px;
      margin-right: 16px;
      color: #2f4858;
    }
  }
`;
