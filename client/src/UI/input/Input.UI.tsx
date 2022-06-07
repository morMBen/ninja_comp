import React from 'react';
import { Wrapper } from './Input.UI.styles';
import { InputProps } from './Input.UI.types';

const Input: React.FC<React.PropsWithChildren<InputProps>> = ({
  handlers,
  mode = 'light',
  styles,
  value,
  onChange,
  type,
}) => {
  return (
    <Wrapper
      data-type={type}
      onChange={onChange}
      style={styles}
      {...handlers}
      data-mode={mode}
      value={value}
    />
  );
};

export default Input;
