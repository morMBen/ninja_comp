import React from 'react';
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import OfficialStopWatchScreen from '../screens/officialStopWatch/OfficialStopWatch.screen';
import SpeedRoundScreen from '../screens/speedRound/SpeedRound.screen';

const Brr = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/speed-round');
      }}
    >
      Speed-round
    </button>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/speed-round' element={<SpeedRoundScreen />} />

          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
