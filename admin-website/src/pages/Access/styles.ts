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
    text-align: center;
  }
`;

export const ListItemsCategory = styled.div`
  display: flex;
  margin: 8px 16px 8px 16px;
  justify-content: space-between;

  span {
    width: 50px;
    text-align: center;

    :first-child {
      width: 215px;

      text-align: left;
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
  padding: 16px;

  span {
    font-weight: 500;

    :first-child {
      width: 215px;

      text-align: left;
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
