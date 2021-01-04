import styled from 'styled-components';
import Loading from '../../Loading';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 64px;
  z-index: 20;
  max-width: 300px;

  div:nth-child(2) {
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    button {
      transform: rotate(180deg);
    }
    div:nth-child(2) {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const StyledLoading = styled(Loading)`
  width: 100%;
  flex: 1;
`;

export const Selected = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background: #e5e5e9;
  height: 64px;
  justify-content: space-between;
  border-radius: 8px;
  width: 300px;
  cursor: pointer;
  button {
    background: transparent;
    border: 0;
    margin: 4px;
    transition: 0.2s;
  }
`;

export const SelectedInfo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    background: #0e0e2c;
    border-radius: 8px;
    box-shadow: 0 0 6px rgba(0, 0, 100, 0.1);
  }

  h1 {
    font-size: 16px;
    margin-left: 16px;
    color: #0e0e2c;
  }

  p {
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const Content = styled.div`
  z-index: -1;
  position: absolute;
  transition: 0.2s;
  padding: 16px 16px 16px 16px;
  border-radius: 8px;
  top: 76px;
  width: 100%;
  background: #59677d33;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
`;

export const Item = styled.div`
  position: relative;
  color: #0e0e2c;
  border-bottom: 1px solid rgba(0, 0, 20, 0.05);
  padding: 16px 0;
  transition: 0.1s;
  cursor: pointer;

  &:nth-last-child(1) {
    border-bottom: 1px solid transparent;
  }

  h1 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    margin-top: 4px;
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    border-radius: 4px;
    opacity: 0;
    transition: 0.2s;
    right: 16px;
    top: calc(50% - 4px);
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;
