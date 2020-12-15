import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s both;
  animation-timing-function: linear;

  svg {
    animation: ${spin} 2s infinite;
    animation-timing-function: linear;
  }
`;
