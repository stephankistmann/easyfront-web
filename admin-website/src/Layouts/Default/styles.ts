import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* animation: ${fadeIn} 0.1s both; */
`;

export const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 30px;
`;
