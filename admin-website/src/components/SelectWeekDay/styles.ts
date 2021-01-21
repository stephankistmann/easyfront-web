import styled, { css } from 'styled-components';

interface IWeekDayProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectRestriction = styled.div`
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
  justify-content: center;
  border-radius: 8px;
  height: 48px;
  padding: 0 16px;
  position: relative;
  width: 270px;
  margin-top: 16px;
  border: 1px solid rgba(0, 0, 10, 0.05);
`;

export const WeekDay = styled.div<IWeekDayProps>`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: bold;
    transition: 0.2s;
    color: #666;
  }
  ${props =>
    props.selected &&
    css`
      border: 1px solid #69aaf5;
    `}
`;
