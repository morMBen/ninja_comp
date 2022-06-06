import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  --max-size: 25;
  --min-size: 20;
  font-size: var(--responsive);
  font-weight: bold;
  /* @media (max-height: 400px) {
  } */ /* Portrait */
  @media screen and (orientation: portrait) {
    /* Portrait styles */
    width: 12vh;
    height: 12vh;
  }
  /* Landscape */
  @media screen and (orientation: landscape) {
    /* Landscape styles */
  }
`;
