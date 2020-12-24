import styled, { css } from 'styled-components';

interface ITooltipProps {
  direction?: string;
  width: number;
  height: number;
}

export const Container = styled.div<ITooltipProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 8px;
  margin-top: 4px;

  span {
    display: flex;
    background: #eee;
    align-items: center;
    justify-content: center;

    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e31;

    ${props =>
      props.direction === 'up' &&
      css`
        &::before {
          content: '';
          border-style: solid;
          border-color: #eee transparent;
          border-width: 6px 6px 0px;
          top: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      `}

    ${props =>
      props.direction === 'down' &&
      css`
        &::before {
          content: '';
          border-style: solid;
          border-color: #eee transparent;
          border-width: 0px 6px 6px;
          bottom: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      `}
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
