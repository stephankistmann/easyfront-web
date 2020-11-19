import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 20%;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  margin: 24px;
  color: #2f4858;

  svg {
    margin-right: 16px;
  }

  h1 {
    font-weight: 700;
  }
`;

export const Search = styled.div`
  margin: 16px 30px 0 0;
  border-radius: 10px;
`;
