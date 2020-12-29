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
    svg {
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
  padding: 0 8px 0 24px;
  background: linear-gradient(30deg, #ff6757, #ff7957);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  height: 64px;
  justify-content: space-between;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 300px;
  cursor: pointer;
  button {
    background: transparent;
    border: 0;
    svg {
      transition: 0.2s;
    }
  }

  div {
    color: #fff;

    h1 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
      margin-top: 4px;
    }
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
  color: #000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 0;
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
