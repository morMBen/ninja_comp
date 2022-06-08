import React from 'react';
import { Wrapper } from './Banner.styles';
import { BannerProps } from './Banner.types';

const Banner: React.FC<React.PropsWithChildren<BannerProps>> = ({ heading, buttons, footer }) => {
  return (
    <Wrapper>
      <div className='Banner-card'>
        <div className='Banner-card-heading'>{heading}</div>
        <div className='Banner-card-buttons'>{buttons}</div>
        <div className='Banner-card-heading'>{footer}</div>
      </div>
    </Wrapper>
  );
};

export default Banner;
