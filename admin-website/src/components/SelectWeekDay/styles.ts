import styled, { css } from 'styled-components';

interface IWeekDayProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
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
  border-radius: 8px;
  height: 48px;
  padding: 0 16px;
  box-shadow: 0 0 16px rgba(0, 0, 100, 0.08);
  margin-left: 12px;
  position: relative;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ddd;
    position: absolute;
    left: -28px;
  }
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
