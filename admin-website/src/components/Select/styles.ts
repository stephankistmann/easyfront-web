import styled from 'styled-components';
import ReactSelect from 'react-select';

export const StyledReactSelect = styled(ReactSelect)`
  .Select__control {
    border-color: #ddd;
    box-shadow: none;
    height: 48px;
    border-radius: 8px;

    span {
      display: none;
    }

    :hover {
      border-color: #69aaf5;
    }

    :focus {
      border-color: #69aaf5;
    }
  }
  .Select__control--is-focused {
    border-color: #69aaf5;
    box-shadow: none;
    height: 48px;

    :hover {
      border-color: #69aaf5;
    }
  }

  .Select__value-container {
    display: flex;
    align-items: center;
    height: 48px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 8px;

    > div {
      display: flex;
      align-items: center;
      height: 48px;
    }

    .css-b8ldur-Input {
      margin: 0;
    }
  }

  .Select__menu {
    .Select__option--is-focused {
      background-color: #69aaf5;
      color: #fff;
    }

    .Select__option--is-selected {
      background-color: #69aaf588;
    }
  }
`;
