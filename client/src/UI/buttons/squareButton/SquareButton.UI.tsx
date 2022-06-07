import React from 'react';
import { Wrapper } from './SquareButton.UI.style';
import { SquareButtonProps } from './SquareButton.UI.types';

const SquareButton: React.FC<React.PropsWithChildren<SquareButtonProps>> = ({
  type,
  handlers,
  attr,
  mode = 'light',
  styles,
  children,
  onClick,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      className='reusableUI'
      {...handlers}
      style={styles}
      {...attr}
      data-mode={mode}
      data-type={type}
    >
      {children}
    </Wrapper>
  );
};

export default SquareButton;
