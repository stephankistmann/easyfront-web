import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #dfe9eb;
  background: #ffffff;
  flex-direction: column;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
  width: 100%;
  max-width: 1498px;
  border-radius: 10px;
  margin-left: 37px;

  span {
    font-weight: 700;
    flex-direction: row;
  }
`;
export const ListItemsCategory = styled.div`
  display: flex;
  margin: 8px 16px 8px 16px;

  span {
    width: 50px;
    :first-child {
      width: 97px;
    }

    :nth-child(2) {
      width: 235px;
    }

    :nth-child(3) {
      width: 158px;
    }

    :nth-child(4) {
      width: 164px;
    }

    :nth-child(5) {
      width: 178px;
    }

    :nth-child(6) {
      width: 221px;
    }

    :nth-child(7) {
      width: 154px;
    }

    :nth-child(8) {
      width: 210px;
    }
  }
`;

export const ListItems = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: space-between;

  span {
    font-weight: 500;
    margin-right: 16px;
  }
  img {
    height: 38px;
    width: 38px;
    margin-left: 16px;
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

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ChartContainer = styled.div`
  width: 65%;
  margin: 0 0 30px 30px;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
`;

export const DataContentBox = styled.div`
  width: 25%;
  height: 100%;
  margin-right: 60px;
`;
