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
