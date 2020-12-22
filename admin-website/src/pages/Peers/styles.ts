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
    margin-right: 24px;

    svg {
      margin-right: 12px;
    }
  }

  div {
    display: flex;
    align-items: center;

    button {
      margin-left: 16px;
    }
  }
`;

export const Search = styled.div`
  width: 350px;
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;

  :hover {
    border-color: #69aaf5;
  }

  input {
    height: 100%;
    flex: 1;
    border: 0;
    background: transparent;
  }

  svg {
    margin: 14px;
  }

  button {
    border: 0;
    background: transparent;
    margin: 0;
    padding: 0;
    margin-top: 3px;

    svg {
      color: #888;
    }

    &:hover {
      svg {
        color: #333;
      }
    }
  }
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
  border-radius: 4px;
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
  font-weight: 700;

  div {
    width: 33%;
    text-align: center;

    :first-child {
      display: flex;
      justify-content: flex-start;
      margin-left: 8px;
    }

    :last-child {
      display: flex;
      justify-content: flex-end;
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
