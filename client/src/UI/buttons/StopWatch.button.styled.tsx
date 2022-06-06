import styled, { css } from 'styled-components';
import { WrapperProps } from './StopWatchButton.UI.types';

export const Wrapper = styled.button(
  ({ buttonType }: WrapperProps) => css`
    z-index: 2;
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    --max-size: 25;
    --min-size: 20;
    font-size: var(--responsive);
    font-weight: bold;
    /* Portrait */
    @media screen and (orientation: portrait) {
      /* Portrait styles */
      --max-size: 25;
      --min-size: 17;
      font-size: var(--responsive);
      width: 12vh;
      height: 12vh;
    }

    @media (max-height: 650px) and (max-width: 650px) {
      --max-size: 15;
      --min-size: 10;
      font-size: var(--responsive);
    }
    /* Landscape */
    @media screen and (orientation: landscape) {
      /* Landscape styles */
    }
    ${buttonType === 'start' &&
    css`
      background: var(--green);
    `}
    ${buttonType === 'pause' &&
    css`
      background: var(--yellow);
    `}
    ${buttonType === 'reset' &&
    css`
      background: var(--red);
    `}
    ${buttonType === 'end' &&
    css`
      background: var(--blue);
    `}
    ${buttonType === 'off' &&
    css`
      background: none;
      color: transparent;
      border: none;
    `}
    ${buttonType === 'resume' &&
    css`
      background: var(--green);
    `}
    ${buttonType === 'buzzer' &&
    css`
      background: var(--lightblue);
    `}
  `
);
