import styled, { css } from 'styled-components';

interface IContainerProps {
  open: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 48px;
  height: 48px;
  background: #eee;
  border-radius: 8px;
  padding: 12px;
  position: relative;
  box-sizing: border-box;
  transition: 0.4s;
  position: fixed;
  bottom: 24px;
  left: 20px;

  cursor: pointer;
  div:nth-child(1) {
    top: calc(50% + 6px);
    width: 15px;
    margin-left: 4px;
  }
  div:nth-child(2) {
    width: 12px;
    top: calc(50% - 2px);
  }
  div:nth-child(3) {
    width: 20px;
    margin-left: 4px;
    top: calc(50% - 10px);
  }
  ${props =>
    props.open &&
    css`
      left: 210px;
      div:nth-child(1) {
        width: 16px;
        top: calc(50% - 1.5px);
        transform: rotate(45deg);
        margin-left: 4px;
      }
      div:nth-child(2) {
        width: 16px;
        margin-left: 4px;
        top: calc(50% - 1.5px);
        transform: rotate(-45deg);
      }
      div:nth-child(3) {
        width: 16px;
        margin-left: 4px;
        top: calc(50% - 1.5px);
        transform: rotate(-45deg);
      }
    `}
  &:hover {
    background: #ddd;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 24px;
  height: 3px;
  border-radius: 3px;
  background: #aaa;
  transition: 0.4s;
`;
