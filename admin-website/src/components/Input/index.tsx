import React, { useState, useCallback, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  placeholder: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  placeholder,
  error,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  if (error) return <p>ERRROR</p>;

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        {...restProps}
      />
    </Container>
  );
};

export default Input;
