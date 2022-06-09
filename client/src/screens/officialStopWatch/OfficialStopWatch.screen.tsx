import React from 'react';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import { useOfficialTimer } from '../../hooks/timers/officialTimer.hook';
import SquareButton from '../../UI/buttons/squareButton/SquareButton.UI';
import StopWatchButton from '../../UI/buttons/StopWatchButton/StopWatchButton.UI';
import { ButtonType } from '../../UI/buttons/StopWatchButton/StopWatchButton.UI.types';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import Span from '../../UI/span/Span';
import { OfficialStopWatchProps } from './OfficialStopWatchScreen.types';

const OfficialStopWatchScreen: React.FC<OfficialStopWatchProps> = ({
  numOfObstacles,
  competitorName,
  isOfficial,
  setIsTimerOn,
  handleEnd,
  handleReset,
}) => {
  const { seconds, startPause, passEnd, fellReset, btnStatus, points } = useOfficialTimer(
    numOfObstacles,
    isOfficial,
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
            onClick={() => passEnd(handleEnd)}
            text={btnStatus.passEndBtn as ButtonType}
            buttonType={btnStatus.passEndBtn as ButtonType}
          />
          <StopWatchButton
            onClick={() => startPause()}
            text={btnStatus.startPauseBtn as ButtonType}
            buttonType={btnStatus.startPauseBtn as ButtonType}
          />
          <StopWatchButton
            onClick={() => fellReset(handleReset)}
            text={btnStatus.fellResetBtn as ButtonType}
            buttonType={btnStatus.fellResetBtn as ButtonType}
          />
        </>
      }
    />
  );
};

export default OfficialStopWatchScreen;
