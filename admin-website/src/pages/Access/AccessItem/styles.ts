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
  width: 33%;

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
`;

export const Extra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;

  p {
    font-size: 14px;
  }

  svg {
    height: 16px;
    width: 16px;
    margin-right: 8px;
    color: #2f4858;
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
