import styled, { css } from 'styled-components';
import { WrapperProps } from './StopWatchButton.UI.types';

export const Wrapper = styled.button(
  ({ buttonType }: WrapperProps) => css`
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 250ms, color 0ms;
    /* transition: color 0ms; */
    border: 0;
    -webkit-user-select: none;
    touch-action: manipulation;

    z-index: 2;
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    --max-size: 25;
    --min-size: 20;
    font-size: var(--responsive);
    font-weight: bold;

    background-color: var(--box-shadow-light);
    box-shadow: var(--box-shadow-colors);
    color: var(--box-shadow);
    &:hover {
      transform: scale(1.05) rotate(-1deg);
      box-shadow: var(--box-shadow-colors-hover);
    }

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
      --box-shadow-dark: var(--dark-green);
      --box-shadow: var(--dark-green);
      --box-shadow-light: var(--green);
    `}
    ${buttonType === 'pass' &&
    css`
      --box-shadow-dark: var(--dark-green);
      --box-shadow: var(--green);
      --box-shadow-light: var(--light-green);
    `}

    ${buttonType === 'pause' &&
    css`
      --box-shadow-dark: var(--dark-yellow);
      --box-shadow: var(--yellow);
      --box-shadow-light: var(--light-yellow);
    `}
    ${buttonType === 'reset' &&
    css`
      --box-shadow-dark: var(--dark-red);
      --box-shadow: var(--dark-red);
      --box-shadow-light: var(--red);
    `}
    ${buttonType === 'fell' &&
    css`
      --box-shadow-dark: var(--dark-red);
      --box-shadow: var(--red);
      --box-shadow-light: var(--light-red);
    `}
    ${buttonType === 'end' &&
    css`
      --box-shadow-dark: var(--dark-blue);
      --box-shadow: var(--blue);
      --box-shadow-light: var(--light-blue);
    `}
    ${buttonType === 'off' &&
    css`
      background: none;
      color: transparent;
      border: none;
    `}
    ${buttonType === 'resume' &&
    css`
      --box-shadow-dark: var(--dark-green);
      --box-shadow: var(--dark-green);
      --box-shadow-light: var(--green);
    `}
      ${buttonType === 'buzzer' &&
    css`
      --box-shadow-dark: var(--dark-grey-blue);
      --box-shadow: var(--grey-blue);
      --box-shadow-light: var(--light-grey-blue);
    `}
  `
);
