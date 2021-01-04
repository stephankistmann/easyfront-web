import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  background: transparent;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 56px;
  width: 100%;
  font-weight: 700;
  background: transparent;
  padding: 13px;
  border: 0;
  color: #0e0e2c;
  align-items: center;
  overflow: hidden;
  transition: 0.4s;
  background: transparent;
  border-radius: 8px;

  p {
    margin-left: 40px;
    transition: 0.4s;
  }

  svg {
    margin-left: 4px;
    position: absolute;
    left: 12px;
  }

  &:hover {
    filter: brightness(1.3);
  }
`;
