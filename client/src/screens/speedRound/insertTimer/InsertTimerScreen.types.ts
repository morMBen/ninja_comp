import { RoundType } from '../SpeedRound.screen.types';

export type InsertTimerScreenProps = {
  numOfObstacles: number;
  roundType: RoundType;
  name: string;
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
};
