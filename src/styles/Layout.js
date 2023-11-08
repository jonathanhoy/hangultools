import styled from "styled-components";
import variables from "./variables";

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 14.5rem 1fr;
  .leftmenu {
    grid-column: 1 / 2;
  }
  .mainbox {
    grid-column: 2 / 3;
    height: 100dvh;
    overflow: scroll;
  }
  @media (max-width: ${variables.md}) {
    grid-template-columns: 12.5rem 1fr;
  }

  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
    .mainbox {
      margin-top: 44px;
      grid-column: 1 / 2;
      height: auto;
      width: 95%;
      margin-left: auto;
      margin-right: auto;
      .home-wrapper, .about-wrapper {
        width: 100%;
      }
    }
  }
`;

const ComponentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 14.5rem;
  .settings {
    grid-column: 2 / 3;
  }
  @media (max-width: ${variables.md}) {
    grid-template-columns: 1fr 12.5rem;
  }
  @media (max-width: ${variables.sm}) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    .settings {
      grid-column: 1 / 7;
    }
    .resources {
      grid-column: 1 / 7;
      grid-row: 2 / 3;
      width: 100%;
    }
  }
`;

const LayoutFix = styled.div`
  overflow: scroll;
  max-height: 100dvh;
  @media (max-width: ${variables.sm}) {
    grid-column: 1 / 7;
    max-height: auto;
  }
`;

export {
  MainLayout,
  ComponentLayout,
  LayoutFix
}