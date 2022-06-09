import React, { useState } from 'react';
import InsertTimerScreen from '../../components/insertTimerScreen/InsertTimerScreen';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import Heading from '../../UI/heading/Heading.UI';
import ResetSpeedRoundScreenBanner from './banners/ResetSpeedRound.screen.banner';
import SpeedRoundScreenFrom from './form/SpeedRound.screen.form';
import { RoundDetailsType } from './SpeedRound.screen.types';

function SpeedRoundScreen() {
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);
  const [resetBanner, setResetBanner] = useState<JSX.Element | null>(null);
  const [{ numOfObstacles, roundType, name }, setRoundDetails] = useState<RoundDetailsType>({
    roundType: 'official',
    numOfObstacles: 0,
    name: '',
  });

  const insertSpeedRoundSelectionScreen = () => {
    return (
      <RoundScreen
        header={
          <>
            <Heading headingType='h2' styles={{ color: 'white' }}>
              Fast Round:
            </Heading>
            <Heading headingType='h4' styles={{ color: 'white' }}>
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
            <Heading headingType='h6' styles={{ color: 'white' }}>
              Official Round: fslf sadfs aldfsadlfj fslf sadfs aldfsadlfjfslf sadfs aldfsadlfj fslf
              sadfs aldfsadlfj{' '}
            </Heading>
            <Heading headingType='h6' styles={{ color: 'white' }}>
              <span style={{ color: 'black' }}>Semi Official Round:</span> fslf sadfs aldfsadlfj
              fslf sadfs aldfsadlfjfslf sadfs aldfsadlfj fslf sadfs aldfsadlfj{' '}
            </Heading>
            <Heading headingType='h6' styles={{ color: 'white' }}>
              Official Round: fslf sadfs aldfsadlfj fslf sadfs aldfsadlfjfslf sadfs aldfsadlfj fslf
              sadfs aldfsadlfj{' '}
            </Heading>
          </>
        }
      />
    );
  };

  const handleResetBanner = (resetCallback: () => void) => {
    setResetBanner(
      <ResetSpeedRoundScreenBanner resetCallback={resetCallback} setResetBanner={setResetBanner} />
    );
  };

  return (
    <>
      {resetBanner && resetBanner}
      {!isTimerOn && insertSpeedRoundSelectionScreen()}
      {isTimerOn && (
        <InsertTimerScreen
          numOfObstacles={numOfObstacles}
          roundType={roundType}
          name={name}
          setIsTimerOn={setIsTimerOn}
          handleEnd={() => {}}
          handleReset={handleResetBanner}
        />
      )}
    </>
  );
}

export default SpeedRoundScreen;
