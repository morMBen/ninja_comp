import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  /* display: grid; */
  display: flex;
  flex-direction: column;

  /* grid-template-rows: 1fr 4fr; */
  .scores-display-card__seconds {
    margin-bottom: 1rem;
  }
  .scores-display-card {
    flex-grow: 1;
    overflow-y: auto;
    border-top: 1px solid var(--white);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
