import React from 'react';
import { useOfficialStopWatchContent } from '../../contexts/OfficialStopWatch.context';
// import { useOfficialStopWatchContent } from '../../contexts/OfficialStopWatch.context';
import { useOfficialTimer } from '../../hooks/timers/officialTimer.hook';
import StopWatchButton from '../../UI/buttons/StopWatchButton/StopWatchButton.UI';
import { ButtonType } from '../../UI/buttons/StopWatchButton/StopWatchButton.UI.types';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import Heading from '../../UI/heading/Heading.UI';
import { secToString } from '../../utils/calc/ClockCalc';
import { OfficialStopWatchProps } from './OfficialStopWatchScreen.types';

const OfficialStopWatchScreen: React.FC<OfficialStopWatchProps> = ({
  numOfObstacles,
  competitorName,
  isOfficial,
}) => {
  const { seconds, startPause, passEnd, fellReset, btnStatus, points } = useOfficialTimer(
    numOfObstacles,
    isOfficial,
    20
  );
  return (
    <RoundScreen
      header={<h2>{competitorName}</h2>}
      body={
        <>
          <Heading type='h1' styles={{ textAlign: 'center' }}>
            {secToString(seconds)}
          </Heading>
          {points.map((point, index) => (
            <Heading type='h2' key={index}>
              {secToString(point.seconds)} {`${point.passed}`}
            </Heading>
          ))}
        </>
      }
      footer={
        <>
          <StopWatchButton
            onClick={() => passEnd(() => {})}
            text={btnStatus.passEndBtn as ButtonType}
            buttonType={btnStatus.passEndBtn as ButtonType}
          />
          <StopWatchButton
            onClick={() => startPause()}
            text={btnStatus.startPauseBtn as ButtonType}
            buttonType={btnStatus.startPauseBtn as ButtonType}
          />
          <StopWatchButton
            onClick={() => fellReset(() => true)}
            text={btnStatus.fellResetBtn as ButtonType}
            buttonType={btnStatus.fellResetBtn as ButtonType}
          />
        </>
      }
    />
  );
};

export default OfficialStopWatchScreen;
