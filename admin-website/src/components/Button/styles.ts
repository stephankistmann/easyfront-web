import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  background: linear-gradient(-30deg, #ff6757, #ff7957);
  height: 56px;
  width: 100%;
  border-radius: 8px;
  border: 0;
  color: #ffffff;
  font-weight: 500;
  transition: background-color 0.2s;
  max-width: 340px;
`;

export const IconContent = styled.div`
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
`;
