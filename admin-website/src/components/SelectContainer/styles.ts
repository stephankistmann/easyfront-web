import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dfe9eb;
  color: #666360;
  display: flex;
  & + div {
    margin-top: 8px;
  }
  p {
    align-self: flex-start;
    margin-right: 16px;
    font-size: 16px;
  }
  span {
    display: none;
  }
`;
