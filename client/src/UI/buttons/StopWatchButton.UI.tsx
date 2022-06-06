import React from 'react';
import { Wrapper } from './StopWatch.button.styled';
import { StopWatchButtonProps } from './StopWatchButton.UI.types';

const StopWatchButton: React.FC<StopWatchButtonProps> = ({ onClick, text }) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

export default StopWatchButton;
