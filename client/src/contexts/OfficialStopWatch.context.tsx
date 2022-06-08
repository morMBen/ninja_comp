import { createContext, useContext } from 'react';
import { Point } from '../hooks/timers/officialTimer.hook';
export type OfficialStopWatchContent = {
  seconds: number;
  points: Point[];
  btnStatus: { startPauseBtn: string; passEndBtn: string; fellResetBtn: string };
  fellReset: (callback: () => boolean) => void;
  passEnd: (callback: (seconds: number, points: Point[]) => void) => void;
  startPause: () => void;
};
export const MyOfficialStopWatchContent = createContext<OfficialStopWatchContent>({
  seconds: 0,
  points: [],
  btnStatus: { startPauseBtn: 'start', passEndBtn: 'off', fellResetBtn: 'off' },
  fellReset: (callback) => {},
  passEnd: (callback) => {},
  startPause: () => {},
});
export const useOfficialStopWatchContent = () =>
  useContext<OfficialStopWatchContent>(MyOfficialStopWatchContent);
