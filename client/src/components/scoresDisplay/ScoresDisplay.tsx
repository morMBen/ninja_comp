import React from 'react';
import Heading from '../../UI/heading/Heading.UI';
import Span from '../../UI/span/Span';
import { secToString } from '../../utils/calc/ClockCalc';
import { Wrapper } from './ScoreDisplay.styles';
import { ScoresDisplayProps } from './ScoreDisplay.types';

const ScoresDisplay: React.FC<ScoresDisplayProps> = ({ points, seconds, numOfObstacles }) => {
  return (
    <Wrapper>
      <div className='scores-display-card__seconds'>
        <Heading headingType='h1'>{secToString(seconds)}</Heading>
      </div>
      <div className='scores-display-card'>
        {points.map((point, index) => (
          <Heading
            headingType='h2'
            key={index}
            styles={numOfObstacles === index + 1 ? { color: 'var(--light-yellow)' } : undefined}
          >
            {index < 9 && <>&nbsp;</>} &nbsp;
            {index + 1}
            {index < 9 && <>&nbsp;</>}) &nbsp;
            <Span type={point.passed ? 'none' : 'decorationLine'}>
              <>
                &nbsp;
                {secToString(point.seconds)}
                &nbsp;
              </>
            </Span>
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          </Heading>
        ))}
      </div>
    </Wrapper>
  );
};

export default ScoresDisplay;
