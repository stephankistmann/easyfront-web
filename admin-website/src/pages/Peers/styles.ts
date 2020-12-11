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
  justify-content: space-between;

  span {
    width: 170px;
    text-align: center;

    :first-child {
      text-align: left;
      width: 200px;
    }

    :last-child {
      width: 60px;
    }
  }
`;

export const ListItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  margin-top: 8px;
  padding: 16px;

  span {
    width: 170px;
    font-weight: 500;
    padding: 16px;
    text-align: center;

    :first-child {
      text-align: left;
      width: 200px;
    }

    :last-child {
      width: 95px;
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
