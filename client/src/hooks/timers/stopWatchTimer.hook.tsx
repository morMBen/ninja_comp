import { useReducer } from 'react';
import { useTimerInterval } from './timerInterval.hook';

// type StartPauseBtn = 'start' | 'pause' | 'off' | 'end';
// type SplitResetBtn = 'reset' | 'split' | 'off' | 'buzzer';

export type HandleEnd = (seconds: number, points: Point[]) => void;

export type HandleReset = (callback: () => void) => void;

enum watchActionKind {
  START = 'START',
  PAUSE = 'PAUSE',
  RESET = 'RESET',
  SPLIT = 'SPLIT',
  SPLIT_ONE_BEFORE_LAST = 'SPLIT_ONE_BEFORE_LAST',
  SPLIT_LAST_POINT = 'SPLIT_LAST_POINT',
  TOGGLE_IS_TIMER_ON = 'TOGGLE_IS_TIMER_ON',
}

export interface Point {
  seconds: number;
  passed: boolean;
}

interface I_WatchAction {
  type: watchActionKind;
  payload?: any;
}

interface I_WatchState {
  points: Point[];
  btnStatus: { startPauseBtn: string; splitResetBtn: string };
  isTimerOn: boolean;
}

const InitialState: I_WatchState = {
  points: [],
  btnStatus: { startPauseBtn: 'start', splitResetBtn: 'off' },
  isTimerOn: false,
};

function counterReducer(state: I_WatchState, action: I_WatchAction) {
  const { type, payload } = action;
  switch (type) {
    case watchActionKind.START:
      return {
        ...state,
        btnStatus: {
          startPauseBtn: 'pause',
          splitResetBtn: 'split',
        },
      };
    case watchActionKind.PAUSE:
      return {
        ...state,
        btnStatus: {
          startPauseBtn: 'start',
          splitResetBtn: 'reset',
        },
      };
    case watchActionKind.RESET:
      return {
        ...state,
        btnStatus: {
          startPauseBtn: 'start',
          splitResetBtn: 'off',
        },
        points: [],
      };
    case watchActionKind.SPLIT:
      return {
        ...state,
        points: [...state.points, payload],
      };
    case watchActionKind.SPLIT_ONE_BEFORE_LAST:
      return {
        ...state,
        btnStatus: { ...state.btnStatus, splitResetBtn: 'buzzer' },
        points: [...state.points, payload],
      };
    case watchActionKind.SPLIT_LAST_POINT:
      return {
        ...state,
        btnStatus: {
          startPauseBtn: 'end',
          splitResetBtn: 'reset',
        },
        points: [...state.points, payload],
        isTimerOn: !state.isTimerOn,
      };
    case watchActionKind.TOGGLE_IS_TIMER_ON:
      return {
        ...state,
        isTimerOn: !state.isTimerOn,
      };
    default:
      return { ...state };
  }
}

export const useStopWatchTimer = (numOfObstacles: number, fractionSpeed: number) => {
  const { seconds, startTimer, restartTimer, pauseTimer } = useTimerInterval(fractionSpeed);
  const [{ btnStatus, points, isTimerOn }, timerDispatch] = useReducer(
    counterReducer,
    InitialState
  );
  const start = () => {
    startTimer();
    timerDispatch({ type: watchActionKind.START });
  };
  const pause = () => {
    pauseTimer();
    timerDispatch({ type: watchActionKind.PAUSE });
  };
  const reset = () => {
    restartTimer();
    timerDispatch({ type: watchActionKind.RESET });
  };
  const split = () => {
    if (numOfObstacles === points.length + 1) {
      pauseTimer();
      timerDispatch({ type: watchActionKind.SPLIT_LAST_POINT, payload: { seconds } });
    } else if (numOfObstacles === points.length + 2) {
      timerDispatch({
        type: watchActionKind.SPLIT_ONE_BEFORE_LAST,
        payload: { seconds },
      });
    } else {
      timerDispatch({ type: watchActionKind.SPLIT, payload: { seconds } });
    }
  };
  const startPause = (handleEnd: HandleEnd) => {
    const isPassedAllObstacles = numOfObstacles > points.length;
    if (isPassedAllObstacles) {
      if (isTimerOn) {
        pause();
      } else {
        start();
      }
      timerDispatch({ type: watchActionKind.TOGGLE_IS_TIMER_ON });
    } else {
      handleEnd(seconds, points);
    }
  };
  const splitReset = (handleReset: HandleReset) => {
    if (isTimerOn) {
      split();
    } else {
      handleReset(reset);
    }
  };
  return { seconds, points, splitReset, startPause, btnStatus };
};
