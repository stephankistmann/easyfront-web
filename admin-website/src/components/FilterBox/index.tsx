import React, { useState, useCallback } from 'react';
import { Container } from './styles';

interface FilterBoxProps {
  name: string;
}

const FilterBox: React.FC<FilterBoxProps> = ({ name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container
      isFocused={isFocused}
      onClick={handleInputFocus}
      onBlur={handleInputBlur}
    >
      {name}
    </Container>
  );
};

export default FilterBox;
