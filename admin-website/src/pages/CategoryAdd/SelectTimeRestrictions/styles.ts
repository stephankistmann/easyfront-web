import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* padding-right: 16px;
  margin-right: 16px;
  margin-top: 8px; */
  flex-direction: column;
  align-items: left;
  margin-top: 0;
`;

export const SelectRestriction = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  margin-right: 16px;
  height: 48px;

  p {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 208px;
  height: 48px;
  box-shadow: 0 0 16px rgba(0, 0, 100, 0.08);
  /* margin-left: 12px; */
  position: relative;

  /* &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ddd;
    position: absolute;
    left: -28px;
  } */

  > input {
    border: 0;

    :first-child {
      margin-right: 8px;
    }
  }
`;
