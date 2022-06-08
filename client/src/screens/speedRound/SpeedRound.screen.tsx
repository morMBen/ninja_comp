import React, { useState } from 'react';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import Heading from '../../UI/heading/Heading.UI';
import OfficialStopWatchScreen from '../officialStopWatch/OfficialStopWatch.screen';
import StopWatchScreen from '../stopWatch/StopWatchScreen';
import SpeedRoundScreenFrom from './form/SpeedRound.screen.form';
import { RoundDetailsType, RoundType } from './SpeedRound.screen.types';

function SpeedRoundScreen() {
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);

  const [{ numOfObstacles, roundType, name }, setRoundDetails] = useState<RoundDetailsType>({
    roundType: 'official',
    numOfObstacles: 0,
    name: '',
  });

  const insertTimerScreen = (numOfObstacles: number, roundType: RoundType, name: string) => {
    console.log(roundType);
    if (roundType === 'stopwatch') {
      return <StopWatchScreen competitorName={name} numOfObstacles={numOfObstacles} />;
    }
    if (roundType === 'official') {
      return (
        <OfficialStopWatchScreen
          isOfficial={true}
          competitorName={name}
          numOfObstacles={numOfObstacles}
        />
      );
    }
    if (roundType === 'semi-official') {
      return (
        <OfficialStopWatchScreen
          isOfficial={false}
          competitorName={name}
          numOfObstacles={numOfObstacles}
        />
      );
    }
  };

  const insertSpeedRoundSelectionScreen = () => {
    return (
      <RoundScreen
        header={
          <>
            <Heading type='h1' styles={{ color: 'white' }}>
              Fast Round
            </Heading>
            <Heading type='h4' styles={{ color: 'white' }}>
              {` Just insert competitor name, choose type and number of obstacles.
               and go...`}
            </Heading>
          </>
        }
        body={
          <>
            <SpeedRoundScreenFrom setRoundDetails={setRoundDetails} setIsTimerOn={setIsTimerOn} />
          </>
        }
        footer={
          <>
            <Heading type='h6' styles={{ color: 'white' }}>
              Official Round: fslf sadfs aldfsadlfj fslf sadfs aldfsadlfjfslf sadfs aldfsadlfj fslf
              sadfs aldfsadlfj{' '}
            </Heading>
            <Heading type='h6' styles={{ color: 'white' }}>
              <span style={{ color: 'black' }}>Semi Official Round:</span> fslf sadfs aldfsadlfj
              fslf sadfs aldfsadlfjfslf sadfs aldfsadlfj fslf sadfs aldfsadlfj{' '}
            </Heading>
            <Heading type='h6' styles={{ color: 'white' }}>
              Official Round: fslf sadfs aldfsadlfj fslf sadfs aldfsadlfjfslf sadfs aldfsadlfj fslf
              sadfs aldfsadlfj{' '}
            </Heading>
          </>
        }
      />
    );
  };

  return (
    <>
      {!isTimerOn && insertSpeedRoundSelectionScreen()}
      {isTimerOn && insertTimerScreen(numOfObstacles, roundType, name)}
    </>
  );
}

export default SpeedRoundScreen;