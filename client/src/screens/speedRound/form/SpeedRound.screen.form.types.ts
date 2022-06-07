import { RoundDetailsType } from '../SpeedRound.screen.types';

export type SpeedRoundScreenFromProps = {
  setRoundDetails: React.Dispatch<React.SetStateAction<RoundDetailsType>>;
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>;
};
