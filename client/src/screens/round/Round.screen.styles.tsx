import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  .round__body {
    height: 100%;
    width: 70%;
    background-color: blue;
  }
  .round__header {
    height: 25%;
    background-color: grey;
    padding: 1rem;
  }
  .round__center {
    padding: 1rem;
    height: 75%;
    background-color: white;
  }
  .round__buttons {
    padding: 1rem;
    width: 30%;
    height: 100%;
    background-color: red;
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
      background-color: blue;
    }
    .round__center {
      height: 75%;
      background-color: grey;
    }
    .round__buttons {
      width: 100%;
      height: 25%;
      background-color: blue;
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
