import { HandleEnd, HandleReset } from '../../hooks/timers/stopWatchTimer.hook';

export type OfficialStopWatchProps = {
  numOfObstacles: number;
  isOfficial: boolean;
  competitorName: string;
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
  handleEnd: HandleEnd;
  handleReset: HandleReset;
};
