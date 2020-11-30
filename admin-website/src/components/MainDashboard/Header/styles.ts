import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 20%;
  justify-content: space-between;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  margin: 24px;
  color: #2f4858;

  svg {
    margin-right: 16px;
    margin-left: 4px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
  }
`;
