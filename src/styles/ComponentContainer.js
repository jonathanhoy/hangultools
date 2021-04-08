import styled from 'styled-components';
import variables from './variables';

const ComponentContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: start;
  margin-top: 2rem;
  grid-gap: 3rem;
  /* Settings */
  section:nth-child(1) {
    grid-column: 1 / 2;
  }
  /* Main Component */
  section:nth-child(2) {
    grid-column: 2 / 3;
  }
`;

export default ComponentContainer;