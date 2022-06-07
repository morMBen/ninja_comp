export type RoundType = 'stopwatch' | 'official' | 'semi-official';

export type RoundDetailsType = {
  roundType: RoundType;
  numOfObstacles: number;
  name: string;
};
