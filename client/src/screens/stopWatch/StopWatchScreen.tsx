import React from 'react';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import { useStopWatchTimer } from '../../hooks/timers/stopWatchTimer.hook';
import StopWatchButton from '../../UI/buttons/StopWatchButton/StopWatchButton.UI';
import { ButtonType } from '../../UI/buttons/StopWatchButton/StopWatchButton.UI.types';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import { StopWatchProps } from './StopWatchScreen.types';

const StopWatchScreen: React.FC<StopWatchProps> = ({
  numOfObstacles,
  competitorName,
  setIsTimerOn,
  handleEnd,
  handleReset,
}) => {
  const { seconds, startPause, splitReset, btnStatus, points } = useStopWatchTimer(
    numOfObstacles,
    20
  );

  return (
    <RoundScreen
      header={
        <>
          <button onClick={() => setIsTimerOn(false)}>X</button>
          <h2>{competitorName}</h2>
        </>
      }
      body={
        <>
          <ScoresDisplay points={points} seconds={seconds} numOfObstacles={numOfObstacles} />
        </>
      }
      footer={
        <>
          <StopWatchButton
            onClick={() => startPause(() => {})}
            text={btnStatus.startPauseBtn as ButtonType}
            buttonType={btnStatus.startPauseBtn as ButtonType}
          />
          <StopWatchButton
            onClick={() => splitReset(handleReset)}
            text={btnStatus.splitResetBtn as ButtonType}
            buttonType={btnStatus.splitResetBtn as ButtonType}
          />
        </>
      }
    />
  );
};

export default StopWatchScreen;
