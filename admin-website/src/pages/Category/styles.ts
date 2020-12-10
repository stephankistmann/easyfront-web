import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #dfe9eb;
  background: #ffffff;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
    width: 190px;

    :first-child {
      width: 340px;
    }

    :nth-child(2) {
      width: 240px;
    }

    :nth-child(3) {
      width: 260px;
    }

    :nth-child(4) {
      width: 260px;
    }

    :nth-child(5) {
      width: 300px;
    }

    :last-child {
      width: 95px;
    }
  }
`;

export const ListItems = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  margin-top: 8px;

  span {
    padding: 16px;
    font-weight: 500;

    :first-child {
      width: 340px;
    }

    :nth-child(2) {
      width: 245px;
    }

    :nth-child(3) {
      width: 250px;
    }

    :nth-child(4) {
      width: 265px;
    }

    :nth-child(5) {
      width: 300px;
    }

    :nth-child(6) {
      width: 100px;
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
  justify-content: space-between;
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
    }

    button {
      display: flex;
      width: 600px;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      margin: 0 0 0 16px;
      background: #ffffff;
      border: 1px solid #ff6757;
      color: #2f4858;
      transition: background-color 0.2s;

      :hover {
        color: #fff;
        background: #ff6757;
      }
      svg {
        margin-right: 16px;
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

export const InvisibleButton = styled.button`
  background: transparent;
  border: none;
  width: 22px;
  margin-right: 22px;
`;
