import React from 'react';
import Heading from '../../UI/heading/Heading.UI';
import Span from '../../UI/span/Span';
import { secToString } from '../../utils/calc/ClockCalc';
import { Wrapper } from './ScoreDisplay.styles';
import { ScoresDisplayProps } from './ScoreDisplay.types';

const ScoresDisplay: React.FC<ScoresDisplayProps> = ({ points, seconds }) => {
  return (
    <Wrapper>
      <div className='scores-display-card__seconds'>
        <Heading type='h1'>{secToString(seconds)}</Heading>
      </div>
      <div className='scores-display-card'>
        {points.map((point, index) => (
          <Heading type='h2' key={index}>
            {index + 1}) &nbsp;
            <Span type={point.passed ? 'none' : 'decorationLine'}>
              <>
                &nbsp;
                {secToString(point.seconds)}
                &nbsp;
              </>
            </Span>
            {/* <span
              style={{
                textDecorationLine: point.passed ? 'none' : 'line-through',
                textDecorationColor: 'red',
                textDecorationThickness: '0.15em',
              }}
            >
              &nbsp;
              {secToString(point.seconds)}
              &nbsp;
            </span> */}
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
          </Heading>
        ))}
      </div>
    </Wrapper>
  );
};

export default ScoresDisplay;
