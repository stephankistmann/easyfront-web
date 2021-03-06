import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #fff;
  padding: 24px;
  box-shadow: 0 0 15px rgba(0, 0, 50, 0.1);
`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 18px;
    align-items: center;
    display: flex;
    margin-left: 8px;

    svg {
      margin-right: 12px;
    }
  }
`;
