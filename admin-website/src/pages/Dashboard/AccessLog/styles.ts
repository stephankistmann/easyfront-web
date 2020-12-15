import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  margin-top: 16px;
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  margin-bottom: 24px;

  h1 {
    display: flex;
    align-items: center;
    font-size: 18px;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Content = styled.div``;

export const AccessItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  margin: 0 16px;
  border-top: 1px solid #f6f6f9;
  justify-content: space-between;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoPicture = styled.div`
  width: 48px;
  height: 48px;
  position: relative;

  img {
    width: 48px;
    height: 48px;
  }

  svg {
    position: absolute;
    z-index: 1;
    bottom: -5px;
    right: -5px;
  }
`;

export const InfoContent = styled.div`
  margin-left: 16px;

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    opacity: 0.6;
    margin-top: 4px;
  }
`;

export const Unit = styled.div`
  width: 300px;
  height: 32px;
  border-radius: 8px;
  background: #e2f2ff;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background: #356d9b;
    height: 6px;
    width: 6px;
    opacity: 0.3;
    border-radius: 50%;
    margin: 0 12px;
  }

  p {
    color: #356d9b;
    font-size: 14px;
  }
`;

export const Device = styled.div`
  width: 150px;
  height: 32px;
  border-radius: 8px;
  background: #e4defe;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    background: #5f5294;
    height: 6px;
    width: 6px;
    opacity: 0.3;
    border-radius: 50%;
    margin: 0 12px;
  }
`;
