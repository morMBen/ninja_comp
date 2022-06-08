import React from 'react';
import { useGlobalContext } from '../../../contexts/global.context';
import { stopWatchButtonToHebrew } from '../../../utils/lang/stopWatchButton.lang';
import { Wrapper } from './StopWatch.button.styled';
import { StopWatchButtonProps } from './StopWatchButton.UI.types';

const StopWatchButton: React.FC<StopWatchButtonProps> = ({ onClick, text, buttonType }) => {
  const { isHebrew } = useGlobalContext();
  return (
    <Wrapper onClick={onClick} buttonType={buttonType}>
      {isHebrew ? stopWatchButtonToHebrew(text) : text}
    </Wrapper>
  );
};

export default StopWatchButton;
