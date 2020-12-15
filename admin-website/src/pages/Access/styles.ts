import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #fff;
  padding: 24px;
  box-shadow: 0 0 15px rgba(0, 0, 50, 0.1);

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 18px;
      align-items: center;
      display: flex;
      margin-left: 8px;

      svg {
        margin-right: 12px;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 276px;
  height: 48px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  margin-top: 20px;

  span {
    font-weight: 700;
    flex-direction: row;
    text-align: center;
  }
`;

export const ListItemsCategory = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #eee;
  padding: 8px;
  color: #888;
  border-radius: 4px;
  margin-bottom: 4px;
  border-radius: 8px;
`;

export const ListItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 100, 0.05);
  border-radius: 4px;
  margin-top: 8px;
  padding: 16px;
  border-bottom: 2px solid transparent;
  transition: 0.2s;

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

  &:hover {
    border-bottom: 2px solid #ddd;
  }
`;
