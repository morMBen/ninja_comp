import React from 'react';
// import { useOfficialTimer } from '../hooks/timers/officialTimer.hook';
import { useStopWatchTimer } from '../hooks/timers/stopWatchTimer.hook';

function App() {
  const { seconds, startPause, splitReset, points, btnStatus } = useStopWatchTimer(4, 50);
  // const {
  //   seconds,
  //   startPause,
  //   passEnd,
  //   fellReset,
  //   points,
  //   btnStatus: { startPauseBtn, passEndBtn, fellResetBtn },
  // } = useOfficialTimer(4, false, 50);
  return (
    <>
      {/* <div>
        <button
          onClick={() =>
            fellReset(() => {
              const p = prompt('Create a memo');
              return p === 'y' ? true : false;
            })
          }
        >
          {fellResetBtn}
        </button>
        <button onClick={() => startPause()}>{startPauseBtn}</button>
        <button
          onClick={() =>
            passEnd((seconds, points) => {
              console.log(seconds);
              console.log(points);
            })
          }
        >
          {passEndBtn}
        </button>
        <h1>{seconds}</h1>
        {points.map((p) => {
          return (
            <h6 key={p.seconds}>
              {p.seconds} - {`${p.passed}`}
            </h6>
          );
        })}
      </div> */}
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

      {points.map((point) => (
        <h5 key={point.seconds}>{point.seconds}</h5>
      ))}
    </>
  );
}

export default App;
