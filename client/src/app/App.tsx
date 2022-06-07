import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfficialStopWatchScreen from '../screens/officialStopWatch/OfficialStopWatch.screen';
import SpeedRoundScreen from '../screens/speedRound/SpeedRound.screen';
import StopWatchScreen from '../screens/stopWatch/StopWatchScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SpeedRoundScreen />} />
          <Route
            path='/officiall'
            element={
              <OfficialStopWatchScreen
                isOfficial={true}
                competitorName='Mordi'
                numOfObstacles={4}
              />
            }
          />
          <Route
            path='/official'
            element={<StopWatchScreen competitorName='Mordi' numOfObstacles={4} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
