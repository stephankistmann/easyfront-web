import styled, { css } from 'styled-components';

interface IEventsProps {
  expanded: boolean;
  childNumber: number;
}

interface IExpanedControlProps {
  expanded: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 0 8px 0 8px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

export const Infos = styled.div`
  width: 33%;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    color: #2f4858;
    margin-right: 16px;
  }

  h1 {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const InfosContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;

  div {
    display: flex;

    svg {
      margin-right: 16px;
      margin-left: 16px;
      width: 16px;
      height: 16px;
      color: #2f4858;
    }

    h1 {
      font-size: 14px;
    }
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  margin-right: 16px;

  div {
    display: flex;

    svg {
      margin-right: 16px;
      margin-left: 16px;
      width: 16px;
      height: 16px;
      color: #2f4858;
    }

    h1 {
      font-size: 14px;
    }
  }
`;

export const ExpandControl = styled.button<IExpanedControlProps>`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  margin-right: 8px;

  ${props =>
    props.expanded &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Events = styled.div<IEventsProps>`
  width: 100%;
  height: ${props => (props.expanded ? props.childNumber * 40 : 0)}px;
  transition: 0.2s;
  overflow: hidden;
`;

export const Event = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;

  p {
    margin-left: 32px;
  }
`;

export const Line = styled.div`
  position: absolute;
  left: 16px;
  top: -20px;
  width: 2px;
  height: 40px;
  background: #82d888;
`;

export const Ball = styled.div`
  position: absolute;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  border: 2px solid #82d888;
  left: 13px;
  top: calc(50% - 3px);
  background: #fff;
  z-index: 1;
`;
