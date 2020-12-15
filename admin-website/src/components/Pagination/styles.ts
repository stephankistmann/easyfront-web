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
  background: #eee;
  border: 1px solid #dfe9eb;
  border-radius: 8px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
  color: #2f4858;
  transition: 0.2s;

  :last-child {
    margin-right: 0;
  }

  &:hover {
    background: #ddd;
  }

  span {
    font-size: 18px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
