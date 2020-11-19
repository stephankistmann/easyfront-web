import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
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
  margin: 30px;

  span {
    font-weight: 700;
    flex-direction: row;
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

  span {
    padding: 16px;

    font-weight: 500;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #2f4858;
    margin-right: 16px;
  }
`;

export const ListItemsCategory = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 16px 8px 16px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px 0 30px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 17px;
`;
