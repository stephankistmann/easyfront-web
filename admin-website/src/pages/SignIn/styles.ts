import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #2f4858;
      display: block;
      text-decoration: none;
      transition: color 0.2;
      margin-top: 24px;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  > a {
    color: #ff6757;
    display: block;
    text-decoration: none;
    transition: color 0.2;
    margin-top: 0px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff6757')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
`;
