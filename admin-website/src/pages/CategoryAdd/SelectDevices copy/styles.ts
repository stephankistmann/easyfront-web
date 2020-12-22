import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div``;
export const Selecteds = styled.div`
  > h1 {
    font-size: 14px;
  }
  > div {
    display: flex;
    margin-top: 16px;
  }
`;

export const Unselecteds = styled.div`
  margin-top: 16px;
  > h1 {
    font-size: 14px;
  }
  > div {
    display: flex;
    padding-top: 16px;
  }
  > p {
    font-size: 12px;
    border: 1px solid #69aaf544;
    color: #69aaf5;
    padding: 16px;
    border-radius: 8px;
  }
`;

export const DeviceSelected = styled.div`
  width: 140px;
  box-shadow: 0 0 12px rgba(0, 0, 100, 0.08);
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  margin-right: 12px;
  animation: 0.2s ${fadeIn} both;
  transition: 0.2s;
  position: relative;
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

export const DeviceSelectedInfos = styled.div`
  svg {
    margin-right: 8px;
  }
`;

export const DeviceUnselected = styled.div`
  width: 140px;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  margin-right: 8px;
  transition: 0.2s;
  background: #f3f3f3;
  animation: 0.2s ${fadeIn} both;
  cursor: pointer;
  &:hover {
    background: #e7e7e7;
  }
  svg {
    margin-right: 8px;
  }
`;
