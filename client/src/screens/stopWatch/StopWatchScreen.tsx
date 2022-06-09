import React from 'react';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import { useStopWatchTimer } from '../../hooks/timers/stopWatchTimer.hook';
import SquareButton from '../../UI/buttons/squareButton/SquareButton.UI';
import StopWatchButton from '../../UI/buttons/StopWatchButton/StopWatchButton.UI';
import { ButtonType } from '../../UI/buttons/StopWatchButton/StopWatchButton.UI.types';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import Span from '../../UI/span/Span';
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
          <div>
            <SquareButton type='cancel' onClick={() => setIsTimerOn(false)}>
              Exit
            </SquareButton>
          </div>

          <h2>
            Name:
            <Span type='light-green'>
              <> {competitorName}</>
            </Span>
          </h2>
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
