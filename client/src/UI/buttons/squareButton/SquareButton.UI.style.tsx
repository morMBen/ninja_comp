import styled, { css } from 'styled-components';
import { SquareButtonProps } from './SquareButton.UI.types';

export const Wrapper = styled.button(
  ({ type }: SquareButtonProps) => css`
    /* CSS */
    background-color: var(--light-yellow);
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 8px;
    text-align: center;
    transition: 200ms;
    box-sizing: border-box;
    border: 0;
    --max-size: 20;
    --min-size: 12;
    font-size: var(--responsive);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      outline: 0;
      background: #f4e603;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
    }

    &:disabled {
      filter: saturate(0.2) opacity(0.5);
      -webkit-filter: saturate(0.2) opacity(0.5);
      cursor: not-allowed;
    }
    &[data-type='approve'] {
      background: var(--green);
      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background: var(--dark-green);
      }
    }
    &[data-type='cancel'] {
      background: var(--light-red);
      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background: var(--red);
      }
    }
  `
);
