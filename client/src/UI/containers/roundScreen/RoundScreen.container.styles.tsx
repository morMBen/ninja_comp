import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-image: var(--noise);
  /* background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82ac9ef7-92c2-49d2-ab3c-5583209e0da9/d59j04d-917c0629-d854-4fb1-88b5-262b4bc2e706.jpg/v1/fill/w_1095,h_730,q_70,strp/grid_texture_by_the_night_bird_d59j04d-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzgyYWM5ZWY3LTkyYzItNDlkMi1hYjNjLTU1ODMyMDllMGRhOVwvZDU5ajA0ZC05MTdjMDYyOS1kODU0LTRmYjEtODhiNS0yNjJiNGJjMmU3MDYuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.p_ShC5rXuGXo6l6DebULODAas8ToAijiLqcF9nyzZc4'); */
  background-color: var(--lightgray);

  .round__body {
    height: 100%;
    width: 70%;
  }
  .round__header {
    display: grid;
    grid-template-columns: 1fr 3fr;

    grid-gap: 1rem;
    border: 2px solid #656462;
    border-radius: 5px;
    background-image: var(--noise);
    background-color: #656462;
    padding: 1rem;
    margin: 0.5rem;
    width: calc(100% - 0.5rem);
    height: calc(25% - 0.5rem);
  }
  .round__center {
    color: white;
    padding: 1rem;
    /* height: 75%; */
    border: 2px solid #656462;
    border-radius: 5px;
    margin: 0.5rem;
    width: calc(100% - 0.5rem);
    height: calc(75% - 1rem);
    background-image: var(--noise);
    background-color: black;
  }
  .round__buttons {
    margin: 0.5rem;
    border: 2px solid #656462;
    border-radius: 5px;
    position: relative;
    padding: 1rem;
    /* width: 30%;
    height: 100%; */
    background-image: var(--noise);
    background-color: var(--darkgray);
    width: calc(30% - 1rem);
    height: calc(100% - 1rem);
  }
  @media (max-height: 400px) {
  }
  /* Portrait */
  @media screen and (orientation: portrait) {
    /* Portrait styles */
    flex-direction: column;
    display: flex;
    height: 100vh;
    width: 100%;
    .round__body {
      height: 75%;
      width: 100%;
    }
    .round__header {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr;
      height: 25%;
      width: calc(100% - 1rem);
      height: calc(25% - 1rem);
    }
    .round__center {
      height: 75%;
      width: calc(100% - 1rem);
      height: calc(75%);
    }
    .round__buttons {
      /* width: 100%;
      height: 25%; */
      width: calc(100% - 1rem);
      height: calc(25% - 1rem);
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
