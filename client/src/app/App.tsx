import React from 'react';
import StopWatchScreen from '../screens/stopWatch/StopWatchScreen';
// import { useStopWatchTimer } from '../hooks/timers/stopWatchTimer.hook';

function App() {
  // const { seconds, startPause, splitReset, points, btnStatus } = useStopWatchTimer(4, 50);

  return (
    <>
      <StopWatchScreen competitorName='Mordi' numOfObstacles={4} />
      {/* <div>
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

      {points.map((point) => (
        <h5 key={point.seconds}>{point.seconds}</h5>
      ))} */}
    </>
  );
}

export default App;
