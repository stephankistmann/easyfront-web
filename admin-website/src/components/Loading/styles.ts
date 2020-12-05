import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 56px;
  border-radius: 10px;
  background: #ff6757;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  :hover {
    background: #2f4858;
    cursor: pointer;
  }

  svg {
    margin-right: 16px;
    animation: spin 3s infinite;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
