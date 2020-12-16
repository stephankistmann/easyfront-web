import styled from 'styled-components';
import Loading from '../../components/Loading';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #fff;
  padding: 24px;
  box-shadow: 0 0 15px rgba(0, 0, 50, 0.1);
`;

export const StyledButton = styled(Button)`
  width: 276px;
  height: 48px;
`;

export const MainHeader = styled.div`
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
`;

export const SelectContainer = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLoading = styled(Loading).attrs({
  color: '#888',
})`
  padding-bottom: 64px;
  padding-top: 64px;
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
  align-items: center;
  background: #eee;
  padding: 8px;
  color: #888;
  border-radius: 4px;
  margin-bottom: 4px;
  border-radius: 8px;

  div {
    width: 25%;

    :first-child {
      margin-left: 8px;
    }

    :nth-child(2) {
      text-align: center;
    }

    :nth-child(3) {
      text-align: center;
    }

    :last-child {
      text-align: end;
      margin-right: 8px;
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
