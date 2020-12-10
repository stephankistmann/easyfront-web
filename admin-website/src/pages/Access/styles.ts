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
    width: 50px;

    :first-child {
      width: 215px;
    }

    :nth-child(2) {
      width: 187px;
    }

    :nth-child(3) {
      width: 160px;
    }

    :nth-child(4) {
      width: 170px;
    }

    :nth-child(5) {
      width: 185px;
    }

    :nth-child(6) {
      width: 140px;
    }

    :nth-child(7) {
      width: 348px;
    }

    :last-child {
      width: 95px;
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

  :hover {
    border: 1px solid #ff6756;
  }
`;
