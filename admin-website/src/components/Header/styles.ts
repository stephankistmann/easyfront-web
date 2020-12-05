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
  }

  .sc-kGNybE {
    border: 1px solid #ff6757;

    :hover {
      background: #ff6757;
      color: #fff;
    }
  }

  .sc-bqyKva {
    :hover {
      border: 0;
      background: #2f4858;
      color: #fff;
    }
  }

  button {
    background: #fff;
    box-shadow: none;

    :hover {
      border: 0;
      background: #2f4858;
      color: #fff;
    }
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-top: 8px;
  z-index: 10;
  border: 1px solid #ff6757;
  border-radius: 10px;
  width: 92.5%;
`;

export const SuperunitContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  height: 56px;
  width: 100%;
  border: 0;

  :first-child {
    border-radius: 10px 10px 0 0;
  }

  :last-child {
    border-radius: 0 0 10px 10px;
  }

  :hover {
    border: 0;
    background: #2f4858;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  margin-bottom: 30px;
`;
