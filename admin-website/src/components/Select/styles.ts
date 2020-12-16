import styled from 'styled-components';
import ReactSelect from 'react-select';

export const StyledReactSelect = styled(ReactSelect)`
  .Select__control {
    border-color: #ddd;
    box-shadow: none;

    :hover {
      border-color: #ccc;
    }

    :focus {
      border-color: #ff6757;
    }
  }
  .Select__control--is-focused {
    border-color: #ff6757;
    box-shadow: none;

    :hover {
      border-color: #ff6757;
    }
  }

  .Select__menu {
    .Select__option--is-focused {
      background-color: rgba(255, 103, 87, 0.5);
      color: #fff;
    }

    .Select__option--is-selected {
      background-color: rgba(255, 103, 87, 0.7);
    }
  }
`;
