import styled, { css } from 'styled-components';

interface IOpenProps {
  open: boolean;
}

export const Container = styled.div<IOpenProps>`
  width: 280px;
  min-width: 280px;
  min-height: 100vh;
  overflow: hidden;
  padding: 16px;
  position: relative;
  transition: 0.4s;
  border-right: 1px solid #f0f0f0;
  ${props =>
    !props.open &&
    css`
      width: 88px;
      min-width: 88px;
      padding: 16px;
    `}
`;

export const Logo = styled.div<IOpenProps>`
  width: 200px;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  img {
    margin-left: 16px;
    position: relative;
    height: 40px;
    top: -10px;
  }
  ${props =>
    !props.open &&
    css`
      width: 40px;
    `}
`;

export const Title = styled.h1<IOpenProps>`
  margin-left: 18px;
  font-size: 12px;
  font-weight: bold;
  transition: 0.4s;
  ${props =>
    !props.open &&
    css`
      margin-left: 10px;
    `}
`;

export const Menu = styled.div<IOpenProps>`
  width: 100%;
  margin-top: 16px;
  ${props =>
    !props.open &&
    css`
      button {
        width: 54px;
        p {
          margin-left: 42px;
        }
      }
    `}
`;

export const OpenButton = styled.button<IOpenProps>`
  width: 48px;
  height: 48px;
  background: #eee;
  border: 0;
  border-radius: 8px;
  position: fixed;
  bottom: 24px;
  left: 210px;
  transition: 0.4s;
  svg {
    margin-top: 3px;
    transition-delay: 0.2s;
    transition-duration: 0.4s;
  }
  &:hover {
    background: #ddd;
  }
  ${props =>
    !props.open &&
    css`
      left: 20px;
      svg {
        transform: rotate(180deg);
      }
    `}
`;
