import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #dfe9eb;
  background: #ffffff;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  margin: 80px 30px 0 30px;

  span {
    font-weight: 700;
    flex-direction: row;
  }
`;

export const ListItemsCategory = styled.div`
  display: flex;
  margin: 8px 16px 8px 16px;

  span {
    :first-child {
      width: 290px;
    }

    :nth-child(2) {
      width: 154px;
    }

    :nth-child(3) {
      width: 246px;
    }

    :nth-child(4) {
      width: 130px;
    }

    :nth-child(5) {
      width: 130px;
    }

    :nth-child(6) {
      width: 100px;
    }

    :nth-child(7) {
      width: 103px;
    }

    :nth-child(8) {
      width: 288px;
    }

    :last-child {
      width: 40px;
    }
  }
`;

export const ListItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  margin-top: 8px;

  span {
    padding: 16px;
    font-weight: 500;

    :first-child {
      width: 290px;
    }

    :nth-child(2) {
      width: 150px;
    }

    :nth-child(3) {
      width: 250px;
    }

    :nth-child(4) {
      width: 130px;
    }

    :nth-child(5) {
      width: 130px;
    }

    :nth-child(6) {
      width: 90px;
    }

    :nth-child(7) {
      width: 90px;
    }

    :nth-child(8) {
      width: 317px;
    }

    :last-child {
      display: flex;
      justify-content: flex-end;
    }
  }

  svg {
    width: 22px;
    height: 22px;
    color: #2f4858;
    margin-right: 16px;
  }

  :hover {
    border: 1px solid #ff6756;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 30px 0 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 30px 0 30px;

  form {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    div {
      margin: 0 16px 0 0;
      width: 33%;
    }

    button {
      display: flex;
      align-items: center;
      width: 14%;
      justify-content: center;
      margin: 0;
      font-weight: 700;
      background: transparent;
      border: 0;
      color: #a3a09d;
      transition: background-color 0.2s;

      :hover {
        color: #ff6757;
        background: transparent;
      }

      svg {
        margin: 0;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 17px;
`;
