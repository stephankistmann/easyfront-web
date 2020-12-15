import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: -10px;
  max-width: 480px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  height: 220px;
  width: 220px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 50, 0.05);

  h1 {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    position: absolute;
    top: 16px;
    left: 16px;

    svg {
      margin-right: 8px;
    }
  }

  div {
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 90px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 54px;
      font-weight: 700;
    }
  }
`;
