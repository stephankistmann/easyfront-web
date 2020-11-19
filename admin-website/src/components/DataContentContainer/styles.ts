import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #dfe9eb;
  display: flex;
  margin: 25px 0 0 30px;
  height: 70px;
  width: 100%;
  justify-content: space-between;

  svg {
    margin-right: 16px;
  }

  :first-child {
    margin-left: 30px;
  }

  :last-child {
    margin-right: 30px;
  }

  :hover {
    border: 1px solid #ff6756;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 16px;
  margin-left: 8px;
`;

export const Content = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  padding: 0 8px 0 16px;
  float: right;
`;
