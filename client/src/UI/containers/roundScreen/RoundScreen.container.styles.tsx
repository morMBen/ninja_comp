import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  .round__body {
    height: 100%;
    width: 70%;
  }
  .round__header {
    height: 25%;
    background-color: grey;
    padding: 1rem;
  }
  .round__center {
    color: white;
    padding: 1rem;
    height: 75%;
    background-image: var(--noise);
    background-color: black;
  }
  .round__buttons {
    position: relative;
    padding: 1rem;
    width: 30%;
    height: 100%;
    background-image: var(--noise);
    background-color: var(--darkgray);
  }
  .round__buttons:after {
    position: absolute;
    opacity: 0.6;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, var(--darkgray), var(--lightblue));
    content: '.';
  }
  @media (max-height: 400px) {
  }
  /* Portrait */
  @media screen and (orientation: portrait) {
    /* Portrait styles */
    flex-direction: column;
    height: 100vh;
    width: 100%;
    .round__body {
      height: 75%;
      width: 100%;
    }
    .round__header {
      height: 25%;
    }
    .round__center {
      height: 75%;
    }
    .round__buttons {
      width: 100%;
      height: 25%;
    }
  }
  /* Landscape */
  @media screen and (orientation: landscape) {
    /* Landscape styles */
  }
`;
export const WrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media screen and (orientation: portrait) {
    flex-direction: row;
  }
`;
