import { useReducer, useState } from 'react';
import { useTimerInterval } from './timerInterval.hook';

// type StartPauseBtn = 'start' | 'pause' | 'off' | 'end';
// type SplitResetBtn = 'reset' | 'split' | 'off' | 'buzzer';

enum watchActionKind {
  START = 'START',
  PAUSE = 'PAUSE',
  RESET = 'RESET',
  SPLIT = 'SPLIT',
  SPLIT_TO_BUZZER = 'SPLIT_TO_BUZZER',
  SPLIT_TO_END = 'SPLIT_TO_END',
}

interface I_WatchAction {
  type: watchActionKind;
  payload: number;
}

interface I_WatchState {
  points: number[];
  startPauseBtn: string;
  splitResetBtn: string;
}

const InitialState: I_WatchState = {
  points: [],
  startPauseBtn: 'start',
  splitResetBtn: 'off',
};

function counterReducer(state: I_WatchState, action: I_WatchAction) {
  const { type, payload } = action;
  switch (type) {
    case watchActionKind.START:
      return {
        ...state,
        startPauseBtn: 'pause',
        splitResetBtn: 'split',
      };
    case watchActionKind.PAUSE:
      return {
        ...state,
        startPauseBtn: 'start',
        splitResetBtn: 'reset',
      };
    case watchActionKind.RESET:
      return {
        ...state,
        startPauseBtn: 'start',
        splitResetBtn: 'off',
        points: [],
      };
    case watchActionKind.SPLIT:
      return {
        ...state,
        points: [...state.points, payload],
      };
    case watchActionKind.SPLIT_TO_BUZZER:
      return {
        ...state,
        splitResetBtn: 'buzzer',
        points: [...state.points, payload],
      };
    case watchActionKind.SPLIT_TO_END:
      return {
        ...state,
        startPauseBtn: 'end',
        splitResetBtn: 'reset',
        points: [...state.points, payload],
      };
    default:
      return { ...state };
  }
}

export const useStopWatchTimer = (numOfObstacles: number, fractionSpeed: number) => {
  const { seconds, startTimer, restartTimer, pauseTimer } = useTimerInterval(fractionSpeed);
  const [{ startPauseBtn, splitResetBtn, points }, timerDispatch] = useReducer(
    counterReducer,
    InitialState
  );
  const btnStatus = {
    startPauseBtn,
    splitResetBtn,
  };
  const [isTimerOn, setIsTimerOn] = useState(false);

  const start = () => {
    startTimer();
    timerDispatch({ type: watchActionKind.START, payload: NaN });
  };

  const pause = () => {
    timerDispatch({ type: watchActionKind.PAUSE, payload: NaN });
    pauseTimer();
  };

  const reset = () => {
    timerDispatch({ type: watchActionKind.RESET, payload: NaN });
    restartTimer();
  };
  const split = () => {
    if (numOfObstacles === points.length + 1) {
      timerDispatch({ type: watchActionKind.SPLIT_TO_END, payload: seconds });
      pauseTimer();
      setIsTimerOn((prev) => !prev);
    } else if (numOfObstacles === points.length + 2) {
      timerDispatch({ type: watchActionKind.SPLIT_TO_BUZZER, payload: seconds });
    } else {
      timerDispatch({ type: watchActionKind.SPLIT, payload: seconds });
    }
  };
  const startPause = (handleEnd: (time: number, points: number[]) => void) => {
    if (numOfObstacles > points.length) {
      if (!isTimerOn) {
        start();
      } else {
        pause();
      }
      setIsTimerOn((prev) => !prev);
    } else {
      handleEnd(seconds, points);
    }
  };

  const splitReset = (handleReset: () => boolean) => {
    if (!isTimerOn) {
      handleReset() && reset();
    } else {
      split();
    }
  };

  return { seconds, points, splitReset, startPause, btnStatus };
};
