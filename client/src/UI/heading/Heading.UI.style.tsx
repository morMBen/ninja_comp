import styled, { css } from 'styled-components';
import { HeadingProps } from './Heading.UI.types';

export const Wrapper = styled.div(
  ({ type }: HeadingProps) => css`
    h1 {
      --max-size: 30;
      --min-size: 25;
      font-size: var(--responsive);
    }
    h2 {
      --max-size: 25;
      --min-size: 20;
      font-size: var(--responsive);
    }
    h3 {
      --max-size: 23;
      --min-size: 18;
      font-size: var(--responsive);
    }
    h4 {
      --max-size: 20;
      --min-size: 15;
      font-size: var(--responsive);
    }
    h5 {
      --max-size: 18;
      --min-size: 12;
      font-size: var(--responsive);
    }

    @media screen and (max-width: 1000px) and (orientation: landscape) {
      h1 {
        --max-size: 25;
        --min-size: 20;
        font-size: var(--responsive);
      }
      h2 {
        --max-size: 23;
        --min-size: 18;
      }
      h3 {
        --max-size: 20;
        --min-size: 15;
      }
      h4 {
        --max-size: 18;
        --min-size: 12;
      }
      h5 {
        --max-size: 15;
        --min-size: 12;
      }
    }
  `
);
