import styled from "styled-components";

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
`;

const ComponentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 16.7vw;
  .settings {
    grid-column: 2 / 3;
  }
`;

export {
  MainLayout,
  ComponentLayout
}