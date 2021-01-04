import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 88px;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  border: 0;
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 8px;
  margin-right: 24px;
  transition: 0.2s;

  &:hover {
    background: #ddd;
  }
  ${props =>
    props.disabled &&
    css`
      cursor: default;
      &:hover {
        background: #eee;
      }
    `}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #2f4858;
    margin: 0 16px;
    opacity: 0.6;
  }
`;

export const Title = styled(Link)`
  font-size: 16px;
  color: #2f4858;
  text-decoration: none;
  font-weight: 700;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SubTitle = styled(Link)`
  color: #2f4858;
  text-decoration: none;
  cursor: default;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 88px;

  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    margin: 0 16px;
    svg {
      transition: 0.2s;
    }
  }
`;

export const Profile = styled(Link)`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid #fff;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 12px rgba(0, 0, 20, 0.05);

  transition: 0.2s;
  text-decoration: none;

  img {
    width: 42px;
    height: 42px;
    object-fit: cover;
    border-radius: 50%;
  }
  h1 {
    font-size: 16px;
    font-weight: bolder;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ddd;
    border-radius: 50%;
    transition: 0.2s;
  }

  div {
    position: absolute;
    background: #82d888;
    width: 8px;
    height: 8px;
    box-shadow: 0 0 6px rgba(0, 0, 20, 0.1);
    border-radius: 50%;
    bottom: 0px;
    right: 0px;
  }
`;
