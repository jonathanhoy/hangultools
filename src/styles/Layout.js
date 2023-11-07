import styled from "styled-components";
import variables from "./variables";

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 16.7vw 1fr;
  .leftmenu {
    grid-column: 1 / 2;
  }
  .mainbox {
    grid-column: 2 / 3;
    height: 100dvh;
    overflow: scroll;
  }
  @media (max-width: ${variables.md}) {
    grid-template-columns: 25vw 1fr;
  }

  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ComponentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 16.7vw;
  .settings {
    grid-column: 2 / 3;
  }
  @media (max-width: ${variables.md}) {
    grid-template-columns: 1fr 25vw;
  }
`;

export {
  MainLayout,
  ComponentLayout
}