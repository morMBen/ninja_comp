import React from 'react';

import { Wrapper, WrapperCenter } from './RoundScreen.container.styles';
import { RoundProps } from './RoundScreen.container.types';

const RoundScreen: React.FC<RoundProps> = ({ header, body, footer }) => {
  return (
    <Wrapper>
      <div className='round__body'>
        <div className='round__header'>{header}</div>
        <div className='round__center'>{body}</div>
      </div>
      <div className='round__buttons'>
        <WrapperCenter>{footer}</WrapperCenter>
      </div>
    </Wrapper>
  );
};
export default RoundScreen;
