import React, { useState } from 'react';
import InsertTimerScreen from '../../components/insertTimerScreen/InsertTimerScreen';
import Banner from '../../UI/bunner/Banner';
import SquareButton from '../../UI/buttons/squareButton/SquareButton.UI';
import RoundScreen from '../../UI/containers/roundScreen/RoundScreen.container';
import Heading from '../../UI/heading/Heading.UI';
import SpeedRoundScreenFrom from './form/SpeedRound.screen.form';
import { RoundDetailsType } from './SpeedRound.screen.types';

function SpeedRoundScreen() {
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);
  const [isResetBannerOn, setIsResetBannerOn] = useState<boolean>(false);
  const [choose, setChoose] = useState<boolean>(false);
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

  const handleReset = () => {
    setIsResetBannerOn(true);
    return choose;
  };

  const insertResetBanner = () => {
    return (
      <Banner
        heading={
          <>
            <Heading type='h2'>Are you sure?</Heading>
          </>
        }
        buttons={
          <>
            <SquareButton type={'approve'} onClick={() => {}}>
              Yes
            </SquareButton>
            <SquareButton type={'cancel'} onClick={() => {}}>
              No
            </SquareButton>
          </>
        }
        footer={
          <>
            <Heading type='h4'>If you click Yes, you will not be able to recover the data.</Heading>
          </>
        }
      />
    );
  };

  return (
    <>
      {isResetBannerOn && insertResetBanner()}
      {!isTimerOn && insertSpeedRoundSelectionScreen()}
      {isTimerOn && (
        <InsertTimerScreen
          numOfObstacles={numOfObstacles}
          roundType={roundType}
          name={name}
          setIsTimerOn={setIsTimerOn}
          handleEnd={() => {}}
          handleReset={handleReset}
        />
      )}
    </>
  );
}

export default SpeedRoundScreen;
