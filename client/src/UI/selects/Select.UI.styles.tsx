import styled from 'styled-components';

export const Wrapper = styled.select`
  --max-size: 20;
  --min-size: 12;
  font-size: var(--responsive);
  padding: 0.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
`;
