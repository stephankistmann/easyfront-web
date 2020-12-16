import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-top: -10px;
  max-width: 432px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 200px;
  width: 200px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 8px;

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
    width: 130px;
    height: 130px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 90px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 32px;
      font-weight: 700;
      opacity: 0.8;
    }
  }
`;
