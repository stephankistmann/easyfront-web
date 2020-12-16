import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: space-between;
  padding-right: 32px;
  margin-bottom: 24px;
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
  margin-left: 30px;
  transition: 0.2s;

  :hover {
    background: #ddd;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  h1 {
    font-size: 16px;
    color: #2f4858;
  }
  div {
    width: 4px;
    height: 4px;
    margin: 0 16px;
    border-radius: 4px;
    background: #2f4858;
    opacity: 0.5;
    margin-top: 2px;
  }
  p {
    color: #2f4858;
    font-size: 14px;
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
