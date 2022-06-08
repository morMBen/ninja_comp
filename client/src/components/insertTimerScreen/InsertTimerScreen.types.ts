import { HandleEnd, HandleReset } from '../../hooks/timers/stopWatchTimer.hook';
import { RoundType } from '../../screens/speedRound/SpeedRound.screen.types';

export type InsertTimerScreenProps = {
  numOfObstacles: number;
  roundType: RoundType;
  name: string;
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
  handleReset: HandleReset;
  handleEnd: HandleEnd;
};
