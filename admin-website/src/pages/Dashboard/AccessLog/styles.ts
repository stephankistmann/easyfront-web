import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  margin-top: 16px;
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  margin-bottom: 16px;

  h1 {
    display: flex;
    align-items: center;
    font-size: 16px;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Content = styled.div``;

export const AccessItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px;
  margin: 0 8px;
  border-top: 1px solid #f6f6f9;
  justify-content: space-between;
`;

export const Infos = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;

export const InfoPicture = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  img {
    width: 40px;
    height: 40px;
  }

  svg {
    position: absolute;
    z-index: 1;
    bottom: -8px;
    right: -8px;
  }
`;

export const InfoContent = styled.div`
  margin-left: 16px;

  h1 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 4px;
  }
`;

export const Unit = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 0 24px;
    border-radius: 8px;
    background: #e2f2f2;

    p {
      font-size: 14px;
    }

    > div {
      background: #356d9b;
      height: 4px;
      width: 4px;
      border-radius: 50%;
      margin: 0 12px;
    }
  }
`;

export const Device = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 0 24px;
    border-radius: 8px;
    background: #e4defe;

    p {
      font-size: 14px;
    }

    > div {
      background: #5f5294;
      height: 4px;
      width: 4px;
      border-radius: 50%;
      margin: 0 12px;
    }
  }
`;
