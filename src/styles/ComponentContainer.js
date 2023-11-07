import styled from 'styled-components';
import variables from './variables';

const ComponentContainer = styled.section`
  height: 100dvh;
  align-items: start;
  grid-gap: 3rem;
  /* Settings */
  .settings {
  }
  /* Main Component */
  .component {
  }
  .reference {
    margin-top: 2rem;
    border-top: 0.5px solid ${variables.grey400};
    h2 {
      font-size: 1rem;
      color: ${variables.grey900};
    }
  }
  .mobile-reference {
    display: none;
  }
  @media (max-width: ${variables.md}) {
    grid-gap: 0;
  }
  @media (max-width: ${variables.sm}) {
    height: auto;
    .desktop-reference {
      display: none;
    }
    .mobile-reference {
      display: block;
      border-top: none;
    }
    margin-top: 1rem;
    margin-bottom: 1rem;
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    .settings {
      grid-column: 1 / 7;
      grid-row: 1 / 2;
    }
    .component {
      grid-row: 2 / 3;
      grid-column: 1 / 7;
      align-items: center;
      transition: all 0.2s;
      &.refActive {
        grid-column: 4 / 7;
        /* width: 50%; */
        align-self: flex-start;
      }
    }
    .reference {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      &.refActive {
        grid-column: 1 / 4;
        margin-top: 0;
      }
      h2 {
        margin-top: 0.25rem;
      }
    }
  }

  form {
    position: relative;
  }
`;

export default ComponentContainer;