import React from 'react';
import OfficialStopWatchScreen from '../screens/officialStopWatch/OfficialStopWatch.screen';

function App() {
  return (
    <>
      <OfficialStopWatchScreen isOfficial={false} competitorName='Mordi' numOfObstacles={4} />
    </>
  );
}

export default App;
