import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';
import { StyledReactSelect } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  placeholder?: string;
}

const Select: React.FC<Props> = ({ name, placeholder, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: ref => {
        ref.select.clearValue();
      },
      getValue: rest.isMulti
        ? ref =>
            ref.state.value?.map((option: OptionTypeBase) => option.value) || []
        : ref => (ref.state.value ? ref.state.value.value : ''),
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <StyledReactSelect
      defaultValue={defaultValue}
      placeholder={placeholder}
      menu={(style: Object) => ({ ...style })}
      ref={selectRef}
      classNamePrefix="Select"
      {...rest}
    />
  );
};

export default Select;
