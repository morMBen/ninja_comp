import React from 'react';
import { Wrapper } from './StopWatch.button.styled';
import { StopWatchButtonProps } from './StopWatchButton.UI.types';

const StopWatchButton: React.FC<StopWatchButtonProps> = ({ onClick, text, buttonType }) => {
  return (
    <Wrapper onClick={onClick} buttonType={buttonType}>
      {text}
    </Wrapper>
  );
};

export default StopWatchButton;
