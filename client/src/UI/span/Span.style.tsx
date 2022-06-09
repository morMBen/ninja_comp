import styled, { css } from 'styled-components';

export const Wrapper = styled.span(
  () => css`
    &[data-type='light-green'] {
      color: var(--light-green);
    }
    &[data-type='light-red'] {
      color: var(--light-red);
    }
    &[data-type='decorationLine'] {
      position: relative;
      &:before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        right: 0;
        border-top: 3px solid;
        border-radius: 50%;
        height: 3px;
        border-color: inherit;
        -webkit-transform: rotate(5deg);
        -moz-transform: rotate(5deg);
        -ms-transform: rotate(5deg);
        -o-transform: rotate(5deg);
        transform: rotate(5deg);
        color: var(--red);
      }
      /* text-decoration-line: line-through;
      text-decoration-color: red;
      text-decoration-thickness: 0.15em; */
    }
  `
);
