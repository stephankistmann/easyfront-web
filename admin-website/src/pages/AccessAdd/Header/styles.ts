import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  color: #2f4858;

  svg {
    margin-right: 16px;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
  }
`;
