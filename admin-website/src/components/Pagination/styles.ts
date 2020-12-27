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
  width: 48px;
  height: 48px;
  background: #eee;
  border: 1px solid #dfe9eb;
  border-radius: 8px;
  margin: 16px 8px 0 0;
  color: #2f4858;
  transition: 0.2s;

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

  :last-child {
    margin-right: 0;
  }
`;
