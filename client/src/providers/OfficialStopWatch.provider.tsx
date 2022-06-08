import { FC } from 'react';
import { MyOfficialStopWatchContent } from '../contexts/OfficialStopWatch.context';
import { useOfficialTimer } from '../hooks/timers/officialTimer.hook';

type OfficialStopWatchProviderProps = {
  children?: JSX.Element;
  numOfObstacles: number;
  isOfficial: boolean;
  fractionSpeed: number;
};

const OfficialStopWatchProvider: FC<OfficialStopWatchProviderProps> = ({
  numOfObstacles,
  isOfficial,
  fractionSpeed,
  children,
}) => {
  const { seconds, startPause, passEnd, fellReset, btnStatus, points } = useOfficialTimer(
    numOfObstacles,
    isOfficial,
    fractionSpeed
  );
  return (
    <MyOfficialStopWatchContent.Provider
      value={{ seconds, points, startPause, passEnd, fellReset, btnStatus }}
    >
      {children}
    </MyOfficialStopWatchContent.Provider>
  );
};

export default OfficialStopWatchProvider;
