import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
  .scores-display-card__seconds {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scores-display-card {
    border-top: 1px solid var(--white);
    margin-top: 1rem;
    padding-top: 1rem;
    grid-row: 2 3;
    grid-column: 2 3;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    padding-bottom: 1rem;
  }
`;
