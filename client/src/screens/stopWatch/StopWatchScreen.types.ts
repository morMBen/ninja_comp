import { HandleEnd, HandleReset } from '../../hooks/timers/stopWatchTimer.hook';

export type StopWatchProps = {
  numOfObstacles: number;
  competitorName: string;
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
  handleEnd: HandleEnd;
  handleReset: HandleReset;
};
