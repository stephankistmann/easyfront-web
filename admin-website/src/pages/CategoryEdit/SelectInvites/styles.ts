import styled, { css, keyframes } from 'styled-components';

interface IPropsDevice {
  selected: boolean;
}

const fadeIn = keyframes`
  0%{
    opacity:0;
    transform:scale(0.8)
  }
  100%{
    opacity:1
    transform:scale(1)
  }
`;

export const Container = styled.div`
  margin-top: 16px;
  > h1 {
    font-size: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Invite = styled.div<IPropsDevice>`
  width: 140px;
  position: relative;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  margin-right: 12px;
  transition: 0.2s;
  background: #f3f3f3;
  animation: 0.2s ${fadeIn} both;
  cursor: pointer;

  > span {
    top: -5px;
    right: -5px;
    position: absolute;
    background: #69aaf5;
    border-radius: 50%;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: 0.2s;
    justify-content: center;
    animation: 0.2s ${fadeIn} both;
    svg:nth-child(1) {
      display: none;
    }
    svg {
      color: #fff;
    }
  }

  ${props =>
    props.selected &&
    css`
      box-shadow: 0 0 12px rgba(0, 0, 100, 0.08);
      background: #fff;
    `}

  &:hover {
    > span {
      background: #f56981;
      svg:nth-child(1) {
        display: initial;
      }
      svg:nth-child(2) {
        display: none;
      }
      svg {
        color: #fff;
      }
    }
  }
`;
