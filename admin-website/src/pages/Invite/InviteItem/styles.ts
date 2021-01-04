import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
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
      font-weight: 700;
    }

    p {
      font-size: 12px;
      margin-top: 4px;
    }
  }
`;

export const Schedule = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: center;

  > div {
    display: flex;
    width: 170px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 0 24px;
    /* background: #e2f2f2;
    color: #356d9b; */
    height: 28px;
    opacity: 0.8;

    p {
      font-size: 14px;
    }

    svg {
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }

    > div {
      background: #356d9b;
      height: 4px;
      width: 4px;
      border-radius: 50%;
      margin: 0 12px;
    }
  }
`;

export const Devices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 0 24px;
    /* background: #e4defe;
    color: #5f5294; */
    height: 28px;
    position: relative;
    margin-right: 4px;

    svg {
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }
  }

  p {
    font-size: 14px;
    :last-child {
      display: none;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;

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
