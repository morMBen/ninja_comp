import styled, { css } from 'styled-components';
import { HeadingProps } from './Heading.UI.types';

export const Wrapper = styled.div(
  ({ type }: HeadingProps) => css`
    h2 {
      --max-size: 25;
      --min-size: 20;
      font-size: var(--responsive);
    }
    h5 {
      --max-size: 20;
      --min-size: 12;
      font-size: var(--responsive);
    }
  `
);
