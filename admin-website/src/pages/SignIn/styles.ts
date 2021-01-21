import styled, { keyframes } from 'styled-components';
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

  img {
    height: 100px;
  }

  form {
    margin: 36px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: 700;
    }

    div + div {
      margin-top: 8px;
    }

    button {
      margin-top: 16px;
      height: 48px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    color: #2f4858;
    display: flex;
    text-decoration: none;
    transition: color 0.2;
    margin-top: 24px;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-left: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
`;
