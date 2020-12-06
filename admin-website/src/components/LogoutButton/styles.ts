import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
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
    object-fit: cover;
    border: 1px solid transparent;
    :hover {
      border: 1px solid #ff6757;
    }
  }
`;

export const LogoutMenu = styled.button`
  position: absolute;
  top: 60px;
  background: #ffffff;
  height: 56px;
  border-radius: 10px;
  width: 100px;
  font-weight: 500;
  margin-top: 8px;

  &:hover {
    background: #2f4858;
    color: #ffffff;
  }
`;
