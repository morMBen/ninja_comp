import React from 'react';
// import { useStopWatchTimer } from '../hooks/timers/stopWatchTimer.hook';
import Round from '../screens/round/Round.screen';

function App() {
  // const { seconds, startPause, splitReset, points, btnStatus } = useStopWatchTimer(4, 50);

  return (
    <>
      <Round header={<h1>Hola</h1>} body={<h1>Hola</h1>} footer={<h1>Hola</h1>} />
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
