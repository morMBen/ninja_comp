import OfficialStopWatchScreen from '../../screens/officialStopWatch/OfficialStopWatch.screen';
import StopWatchScreen from '../../screens/stopWatch/StopWatchScreen';
import { InsertTimerScreenProps } from './InsertTimerScreen.types';

const InsertTimerScreen: React.FC<InsertTimerScreenProps> = ({
  numOfObstacles,
  roundType,
  name,
  setIsTimerOn,
  handleEnd,
  handleReset,
}) => {
  if (roundType === 'stopwatch') {
    return (
      <StopWatchScreen
        setIsTimerOn={setIsTimerOn}
        competitorName={name}
        numOfObstacles={numOfObstacles}
        handleEnd={handleEnd}
        handleReset={handleReset}
      />
    );
  }
  if (roundType === 'official') {
    return (
      <OfficialStopWatchScreen
        setIsTimerOn={setIsTimerOn}
        isOfficial={true}
        competitorName={name}
        numOfObstacles={numOfObstacles}
        handleEnd={handleEnd}
        handleReset={handleReset}
      />
    );
  }
  if (roundType === 'semi-official') {
    return (
      <OfficialStopWatchScreen
        setIsTimerOn={setIsTimerOn}
        isOfficial={false}
        competitorName={name}
        numOfObstacles={numOfObstacles}
        handleEnd={handleEnd}
        handleReset={handleReset}
      />
    );
  }
  return <></>;
};
export default InsertTimerScreen;
