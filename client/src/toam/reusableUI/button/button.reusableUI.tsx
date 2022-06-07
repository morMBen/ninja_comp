import React from 'react';
import { ButtonProps } from './button.types';

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  type,
  handlers,
  attr,
  mode = 'light',
  styles,
  children,
}) => {
  return (
    <button
      className='reusableUI'
      {...handlers}
      style={styles}
      {...attr}
      data-mode={mode}
      data-type={type}
    >
      {children}
    </button>
  );
};
