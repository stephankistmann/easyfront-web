import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 50, 0.1);
`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 18px;
    align-items: center;
    display: flex;
    margin-left: 8px;
    margin-right: 24px;

    svg {
      margin-right: 12px;
    }
  }

  div {
    display: flex;
    align-items: center;

    button {
      margin-left: 16px;
    }
  }
`;

export const AvatarContainer = styled.div`
  width: 100%;
  background: #eee;
  height: 64px;
  margin-bottom: 48px;
`;

export const AvatarInput = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  border: 3px solid #fff;
  display: flex;
  position: relative;
  margin: 16px;
  box-shadow: 0 0 12px rgba(0, 0, 20, 0.05);
  align-items: center;
  justify-content: center;
  background: transparent;

  :hover {
    background: black;
    border: 4px solid #fff;

    img {
      opacity: 50%;
    }
  }

  img {
    height: 92px;
    width: 92px;
    border-radius: 50%;
    object-fit: cover;

    transition: opacity 0.3s;
  }

  div {
    position: absolute;
    top: 30%;
    left: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    h1 {
      font-size: 14px;
      color: #ffffff;
    }

    label {
      background: red;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 0;
      cursor: pointer;
      background: transparent;

      display: flex;
      align-items: center;
      justify-content: center;

      input {
        display: none;
      }

      svg {
        width: 20px;
        height: 20px;
        color: #ffffff;
      }
    }
  }
  :hover div {
    opacity: 1;
    visibility: visible;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const FormContainer = styled.div`
  padding: 16px;

  .nameToPhoneSeparation {
    margin-top: 8px;
  }

  .genderToNatureSeparation {
    margin-top: 8px;
  }
`;
