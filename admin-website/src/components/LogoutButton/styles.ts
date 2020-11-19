import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-itens: center;
  justify-content: center;
  position: relative;
  flex-direction: row;
  margin-left: 16px;
  margin-right: 30px;
  height: 48px;
  width: 48px;

  img {
    border-radius: 50%;
    position: absolute;
    right: -37px;
    top: -19px;
  }
`;

export const LogoutMenu = styled.button`
  position: absolute;
  top: 50px;
  background: #f3f3f3;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100px;
  font-weight: 500;
  transition: background-color 0.2s;
  margin-top: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #ff6757;
  }
`;
