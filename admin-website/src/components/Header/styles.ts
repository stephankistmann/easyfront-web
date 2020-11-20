import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12%;
  justify-content: space-between;
  height: 56px;
  margin-bottom: 30px;

  button {
    margin-right: 24px;
  }

  a {
    margin-top: 8px;
    margin-right: 63px;
    color: #2f4858;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }

  p {
    align-self: center;
  }

  p + p {
    margin-left: 4px;
    left: 450px;
    font-weight: bold;
  }
`;

export const Navigation = styled.div`
  display: flex;
  button {
    margin-left: 28px;
  }
`;

export const UserContent = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-right: 8px;
  height: 100%;

  img {
    margin-top: 17px;
    margin-left: 30px;
    margin-right: 30px;
    height: 56px;
    width: 56px;

    :hover {
      border: 1px solid #ff6757;
    }
  }

  button {
    color: #2f4858;
    background: #fff;
    border: 1px solid #dfe9eb;
    box-shadow: none;
    border: 1px solid #ff6757;

    :hover {
      background: #ff6757;
      color: #fff;
    }
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-right: 24px;
  margin-top: 8px;
  z-index: 10;
  border-radius: 10px;
  border: 1px solid #ff6757;

  :hover {
    border: 1px solid #2f4858;
  }
`;
