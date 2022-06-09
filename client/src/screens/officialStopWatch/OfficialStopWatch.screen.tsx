import React from 'react';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import { useOfficialTimer } from '../../hooks/timers/officialTimer.hook';
import StopWatchButton from '../../UI/buttons/StopWatchButton/StopWatchButton.UI';
import { ButtonType } from '../../UI/buttons/StopWatchButton/StopWatchButton.UI.types';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
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
