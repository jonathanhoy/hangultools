import styled from 'styled-components';
import variables from './variables';

const ComponentContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: start;
  margin-top: 2rem;
  grid-gap: 3rem;
  /* Settings */
  .settings {
    grid-column: 1 / 2;
  }
  /* Main Component */
  .component {
    grid-column: 2 / 3;
  }
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 1rem;
    margin-bottom: 1rem;
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    .settings {
      grid-column: 1 / 6;
      grid-row: 1 / 2;
    }
    .component {
      grid-column: 2 / 5;
      grid-row: 2 / 3;
      align-items: center;
      transition: all 0.2s;
      &.refActive {
        grid-column: 3 / 6;
      }
    }
    .reference {
      grid-column: 0 / 1;
      grid-row: 2 / 3;
      transition: all 0.2s;
      &.refActive {
        grid-column: 1 / 3;
      }
    }
  }

  form {
    position: relative;
  }
`;

export default ComponentContainer;