import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .SpeedRoundScreenFrom {
    padding: 0.6rem;
    max-height: 100%;
    max-width: 100%;
    border-radius: 5px;
    background-image: var(--noise);
    background-color: var(--lightgray);
    display: flex;
    flex-direction: column;
  }
  .SpeedRoundScreenFrom__box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .SpeedRoundScreenFrom__box > * {
    padding: 0.3rem;
  }

  @media screen and (orientation: landscape) {
    .SpeedRoundScreenFrom {
      flex-direction: row;
    }
  }
  @media screen and (min-width: 1000px) {
    .SpeedRoundScreenFrom {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 1000px) {
    .SpeedRoundScreenFrom__box > * {
      margin: 0.2rem;
    }
    @media screen and (orientation: landscape) {
      .SpeedRoundScreenFrom__box {
        margin: 0 1rem;
      }
    }
  }
`;
