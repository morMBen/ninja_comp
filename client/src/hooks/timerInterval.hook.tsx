import { useEffect, useRef, useState } from 'react';

export function useTimerInterval(fractionSpeed: number) {
  const [seconds, setSeconds] = useState<number>(0);
  const start = useRef<number | null>(null);
  const pauseTime = useRef<number>(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  const startTimer = () => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        if (!start.current) {
          start.current = +new Date();
        }
        setSeconds((+new Date() - start.current) / 1000 + pauseTime.current);
      }, fractionSpeed);
    }
  };

  const restartTimer = () => {
    start.current = null;
    setSeconds(0);
    pauseTime.current = 0;
  };

  const pauseTimer = () => {
    timer.current && clearInterval(timer.current);
    timer.current = null;
    start.current = null;
    pauseTime.current = seconds;
  };
  return { seconds, startTimer, restartTimer, pauseTimer };
}

export const useStopWatchTimer = (
  numOfObstacles: number,
  fractionSpeed: number
) => {
  const { seconds, startTimer, restartTimer, pauseTimer } =
    useTimerInterval(fractionSpeed);
  const [points, setPoints] = useState<number[]>([]);
  const [btnStatus, setBtnStatus] = useState({
    splitResetBtn: 'start',
    startPauseBtn: 'off',
  });
  const [isTimerOn, setIsTimerOn] = useState(false);

  const start = () => {
    startTimer();
    setBtnStatus({
      splitResetBtn: 'pause',
      startPauseBtn: 'split',
    });
  };

  const pause = () => {
    setBtnStatus({
      splitResetBtn: 'start',
      startPauseBtn: 'reset',
    });
    pauseTimer();
  };

  const reset = () => {
    setBtnStatus({
      splitResetBtn: 'start',
      startPauseBtn: 'off',
    });
    restartTimer();
    setPoints([]);
  };
  const split = () => {
    if (numOfObstacles === points.length + 1) {
      setBtnStatus({
        splitResetBtn: 'end',
        startPauseBtn: 'reset',
      });
      pauseTimer();
      setIsTimerOn((prev) => !prev);
    } else {
      numOfObstacles === points.length + 2 &&
        setBtnStatus((prev) => ({
          ...prev,
          startPauseBtn: 'buzzer',
        }));
    }
    setPoints((prev) => [...prev, seconds]);
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

export const useSemiOfficialTimer = (
  numOfObstacles: number,
  fractionSpeed: number
) => {
  const { seconds, startTimer, restartTimer, pauseTimer } =
    useTimerInterval(fractionSpeed);
  const [points, setPoints] = useState<number[]>([]);
  const [btnStatus, setBtnStatus] = useState({
    startPauseBtn: 'start',
    passBuzzerBtn: 'off',
    fellResetBtn: 'off',
  });
  const [isTimerOn, setIsTimerOn] = useState(false);

  const start = () => {
    startTimer();
    setBtnStatus({
      startPauseBtn: 'pause',
      passBuzzerBtn: 'pass',
      fellResetBtn: 'fell',
    });
  };

  const pause = () => {
    setBtnStatus({
      startPauseBtn: 'resume',
      passBuzzerBtn: 'off',
      fellResetBtn: 'reset',
    });
    pauseTimer();
  };

  const startPause = () => {
    if (numOfObstacles > points.length) {
      if (!isTimerOn) {
        start();
      } else {
        pause();
      }
      setIsTimerOn((prev) => !prev);
    } else {
      // handleEnd(seconds, points);
    }
  };
  return { seconds, btnStatus, startPause };
};
