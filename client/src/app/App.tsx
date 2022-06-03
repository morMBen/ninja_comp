import React from 'react';
import { useStopWatchTimer } from '../hooks/stopWatchTimer.hook';

function App() {
  const { seconds, startPause, splitReset, points, btnStatus } = useStopWatchTimer(4, 50);
  return (
    <>
      <div>
        <button
          onClick={() =>
            startPause((time: number, points: number[]) => {
              console.log(time, points);
            })
          }
        >
          {btnStatus.startPauseBtn}
        </button>
        <button onClick={() => splitReset(() => true)}>{btnStatus.splitResetBtn}</button>
        {seconds.toFixed(2)}
      </div>
      [ {points}]
    </>
  );
}

export default App;
