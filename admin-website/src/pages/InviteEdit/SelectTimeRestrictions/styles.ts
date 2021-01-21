import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectSchedule = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  margin-right: 16px;
  margin-top: 16px;

  p {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  width: 270px;
  height: 48px;
  padding: 0 16px;
  border: 1px solid rgba(0, 0, 10, 0.05);
  position: relative;

  margin-top: 16px;

  p {
    margin-right: 8px;
  }

  > input {
    border: 0;

    :first-child {
      margin-right: 8px;
    }
  }
`;
