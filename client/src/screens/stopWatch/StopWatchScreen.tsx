import React from 'react';
import { useStopWatchTimer } from '../../hooks/timers/stopWatchTimer.hook';
import StopWatchButton from '../../UI/buttons/StopWatchButton.UI';
import { ButtonType } from '../../UI/buttons/StopWatchButton.UI.types';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import { secToString } from '../../utils/ClockCalc';
import { StopWatchProps } from './StopWatchScreen.types';

const StopWatchScreen: React.FC<StopWatchProps> = ({ numOfObstacles, competitorName }) => {
  const { seconds, startPause, splitReset, btnStatus, points } = useStopWatchTimer(
    numOfObstacles,
    20
  );
  return (
    <RoundScreen
      header={<h2>{competitorName}</h2>}
      body={
        <>
          <h1>{secToString(seconds)}</h1>
          {points.map((point) => (
            <h3>{secToString(point.seconds)}</h3>
          ))}
        </>
      }
      footer={
        <>
          <StopWatchButton
            onClick={() => startPause(() => {})}
            text={btnStatus.startPauseBtn}
            buttonType={btnStatus.startPauseBtn as ButtonType}
          />
          <StopWatchButton
            onClick={() => splitReset(() => true)}
            text={btnStatus.splitResetBtn}
            buttonType={btnStatus.splitResetBtn as ButtonType}
          />
        </>
      }
    />
  );
};

export default StopWatchScreen;
