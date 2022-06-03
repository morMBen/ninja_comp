import React from 'react';
import { useStopWatchTimer } from '../hooks/timerInterval.hook';

function App() {
  const { seconds, points, splitReset, startPause, btnStatus } =
    useStopWatchTimer(5, 50);
  return (
    <>
      <h1>Hello World Ninja</h1>
      <div>
        <button
          onClick={() => {
            console.log(seconds.toFixed(2));
          }}
        >
          time
        </button>

        <button
          onClick={() =>
            startPause((time: number, points: number[]) => {
              console.log(time, points);
            })
          }
        >
          {btnStatus.splitResetBtn}
        </button>
        <button onClick={() => splitReset(() => true)}>
          {btnStatus.startPauseBtn}
        </button>
        {seconds.toFixed(2)}
      </div>
      [ {points}]
    </>
  );
}

export default App;
