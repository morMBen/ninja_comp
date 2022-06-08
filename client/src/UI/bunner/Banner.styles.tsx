import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #00000077;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem;
  .Banner-card {
    border: 0.5rem solid var(--dark-grey-blue);
    padding: 3rem;
    border-radius: 80px 5px 80px 5px;
    background-color: var(--light-grey-blue);
  }
  .Banner-card-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Banner-card-buttons button {
    margin: 1rem 2rem;
  }
`;
