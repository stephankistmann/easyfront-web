import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled(ReactSelect)`
  display: flex;
  height: 54px;
  width: 100%;
  margin-top: 0;

  .css-yk16xz-control {
    width: 100%;
    border-radius: 10px;
  }

  .css-1pahdxg-control {
    width: 100%;
    border-radius: 10px;
  }

  .css-26l3qy-menu {
    width: 96%;
    border-radius: 10px;
  }

  .css-4ljt47-MenuList {
    width: 100%;
    border-radius: 10px;
  }
  .css-9gakcf-option {
    background-color: #fff;
    color: black;
    :hover {
      color: white;
      background: #ff6757;
    }
  }


  .css-2b097c-container + div {
    margin-top: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }
  .react-select__control--is-focused {
    border-color: #ff6757;
    box-shadow: none;
  }
  .react-select__control {
    box-shadow: none;
    :hover {
      border-color: #ff6757;
    }
`;
