import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

export const ContainerButton = styled.button`
  display: flex;
  border: 0;
  background: #ff6757;
  height: 56px;
  border-radius: 10px;
  border: 0;
  font-weight: 500;
  transition: background-color 0.2s;
  justify-content: center;
  align-items: center;

  :focus {
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    margin-right: 24px;
  }
`;
