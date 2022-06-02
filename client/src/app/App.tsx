import { useTimerInterval } from '../hooks/timerInterval.hook';
import './App.css';

function App() {
  const { time, restartTimer, startTimer, pauseTimer } = useTimerInterval(100);
  return (
    <div className='App'>
      <h1>Hello World Ninja</h1>
      <button
        onClick={() => {
          console.log(time);
        }}
      >
        time
      </button>
      <button onClick={startTimer}>start time</button>
      <button onClick={restartTimer}>restart time</button>
      <button onClick={pauseTimer}>pause time</button>
      {time.toFixed(2)}
    </div>
  );
}

export default App;
