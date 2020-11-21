import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

export const NavPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #dfe9eb;
  border-radius: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  margin-top: 16px;

  :last-child {
    margin-right: 0;
  }

  &:hover {
    background: #ff6757;
    color: #ffffff;
  }

  span {
    font-size: 18px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
