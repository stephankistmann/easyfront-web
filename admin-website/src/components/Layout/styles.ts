import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  display: flex;
  width: calc(100% - 300px);
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 12%;
`;

export const Content = styled.div`
  flex: 1;
  margin: 0 30px 30px 30px;
`;
