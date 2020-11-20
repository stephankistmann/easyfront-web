import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fcfcff
    color: #2f4858
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  body {
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 103, 87, 0.6);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece {
    background: #f3f3f3;
  }
`;
