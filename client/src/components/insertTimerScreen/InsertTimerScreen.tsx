import OfficialStopWatchScreen from '../../screens/officialStopWatch/OfficialStopWatch.screen';
import StopWatchScreen from '../../screens/stopWatch/StopWatchScreen';
import { InsertTimerScreenProps } from './InsertTimerScreen.types';

const InsertTimerScreen: React.FC<InsertTimerScreenProps> = ({
  numOfObstacles,
  roundType,
  name,
  setIsTimerOn,
}) => {
  if (roundType === 'stopwatch') {
    return (
      <StopWatchScreen
        setIsTimerOn={setIsTimerOn}
        competitorName={name}
        numOfObstacles={numOfObstacles}
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
      />
    );
  }
  return <></>;
};
export default InsertTimerScreen;
