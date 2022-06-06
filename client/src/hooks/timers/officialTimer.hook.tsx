import { useReducer } from 'react';
import { useTimerInterval } from './timerInterval.hook';

// type StartPauseBtn = 'start' | 'pause' | 'off' | 'end';
// type SplitResetBtn = 'reset' | 'split' | 'off' | 'buzzer';

enum watchActionKind {
  START = 'START',
  PAUSE = 'PAUSE',
  FELL = 'FELL',
  RESET = 'RESET',
  SPLIT = 'SPLIT',
  SPLIT_ONE_BEFORE_LAST = 'SPLIT_ONE_BEFORE_LAST',
  SPLIT_LAST_POINT = 'SPLIT_LAST_POINT',
  TOGGLE_IS_TIMER_ON = 'TOGGLE_IS_TIMER_ON',
}

interface Point {
  time: number;
  passed: boolean;
}

interface I_OfficialTimerAction {
  type: watchActionKind;
  payload?: any;
}

interface I_OfficialTimerState {
  points: Point[];
  btnStatus: { startPauseBtn: string; passEndBtn: string; fellResetBtn: string };
  isTimerOn: boolean;
  isFinished: boolean;
}

const InitialState: I_OfficialTimerState = {
  points: [],
  btnStatus: { startPauseBtn: 'start', passEndBtn: 'off', fellResetBtn: 'off' },
  isTimerOn: false,
  isFinished: false,
};

function counterReducer(state: I_OfficialTimerState, action: I_OfficialTimerAction) {
  const { type, payload } = action;
  switch (type) {
    case watchActionKind.START:
      return {
        ...state,
        btnStatus: { startPauseBtn: 'pause', passEndBtn: 'pass', fellResetBtn: 'fell' },
      };
    case watchActionKind.PAUSE:
      return {
        ...state,
        btnStatus: { startPauseBtn: 'resume', passEndBtn: 'off', fellResetBtn: 'reset' },
      };
    case watchActionKind.RESET:
      return {
        ...state,
        btnStatus: { startPauseBtn: 'start', passEndBtn: 'off', fellResetBtn: 'off' },
        points: [],
        isFinished: false,
      };
    case watchActionKind.SPLIT:
      return {
        ...state,
        points: [...state.points, payload],
      };
    case watchActionKind.SPLIT_ONE_BEFORE_LAST:
      return {
        ...state,
        btnStatus: { startPauseBtn: 'pause', passEndBtn: 'buzzer', fellResetBtn: 'fell' },
        points: [...state.points, payload],
      };
    case watchActionKind.SPLIT_LAST_POINT:
      return {
        ...state,
        btnStatus: {
          startPauseBtn: 'off',
          passEndBtn: 'end',
          fellResetBtn: 'reset',
        },
        points: [...state.points, payload],
        isTimerOn: !state.isTimerOn,
        isFinished: true,
      };
    case watchActionKind.FELL:
      return {
        ...state,
        btnStatus: {
          startPauseBtn: 'off',
          passEndBtn: 'end',
          fellResetBtn: 'reset',
        },
        isTimerOn: !state.isTimerOn,
        isFinished: true,
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

export const useOfficialTimer = (
  numOfObstacles: number,
  isOfficial: boolean,
  fractionSpeed: number
) => {
  const { seconds, startTimer, restartTimer, pauseTimer } = useTimerInterval(fractionSpeed);
  const [{ btnStatus, points, isTimerOn, isFinished }, timerDispatch] = useReducer(
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
  const split = (isPassed: boolean) => {
    const isLastPoint = numOfObstacles === points.length + 1;
    const isOneBeforeLastPoint = numOfObstacles === points.length + 2;
    if (isLastPoint) {
      pauseTimer();
      timerDispatch({
        type: watchActionKind.SPLIT_LAST_POINT,
        payload: { seconds, passed: isPassed },
      });
    } else if (isOneBeforeLastPoint) {
      timerDispatch({
        type: watchActionKind.SPLIT_ONE_BEFORE_LAST,
        payload: { seconds, passed: isPassed },
      });
    } else {
      timerDispatch({ type: watchActionKind.SPLIT, payload: { seconds, passed: isPassed } });
    }
  };

  const startPause = () => {
    const isPassedAllObstacles = numOfObstacles <= points.length;
    if (!isPassedAllObstacles) {
      if (isTimerOn) {
        pause();
      } else {
        start();
      }
      timerDispatch({ type: watchActionKind.TOGGLE_IS_TIMER_ON });
    }
  };
  const passEnd = (callback: (seconds: number, points: Point[]) => void) => {
    if (!isTimerOn && isFinished) {
      callback(seconds, points);
    } else if (isTimerOn) {
      split(true);
    }
  };
  const fellReset = (callback: () => boolean) => {
    if (isTimerOn) {
      if (isOfficial) {
        pauseTimer();
        timerDispatch({ type: watchActionKind.FELL });
      } else {
        split(false);
      }
    } else if (seconds > 0) {
      callback() && reset();
    }
  };

  return { seconds, points, startPause, passEnd, fellReset, btnStatus };
};
