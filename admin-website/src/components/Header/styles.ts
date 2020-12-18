import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
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

    &:hover {
      svg {
        fill: #ff6757;
      }
    }
  }
`;

export const Profile = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  a {
    height: 40px;
    width: 40px;
    text-decoration: none;

    img {
      width: 40px;
      height: 40px;
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
  }

  &:hover {
    border: 2px solid #ff675777;
    a {
      h1 {
        background: #ff675777;
      }
    }
  }
`;
