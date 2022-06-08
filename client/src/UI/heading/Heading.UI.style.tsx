import styled, { css } from 'styled-components';
import { HeadingProps } from './Heading.UI.types';

export const Wrapper = styled.div(
  ({ type }: HeadingProps) => css`
    h5 {
      --max-size: 20;
      --min-size: 12;
      font-size: var(--responsive);
    }
  `
);
