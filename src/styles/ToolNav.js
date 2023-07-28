import styled from "styled-components"
import variables from './variables';

const StyledToolNav = styled.nav`
  background: ${variables.grey100};
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
  }
  ul {
    display: flex;
    gap: 0.5rem;
    overflow: scroll;
    padding: 0.5rem 0;
    li {
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${variables.black};
        font-size: 1rem;
        font-weight: 600;
        background-color: ${variables.grey400};
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: 1px solid ${variables.grey400};
        i {
          margin-right: 0.5rem;
        }
        &:hover {
          color: ${variables.primary900};
          background-color: ${variables.primary100};
          border-color: ${variables.primary100};
        }
        &.active {
          background-color: ${variables.primary900};
          color: ${variables.white};
          border-color: ${variables.primary900};
        }
      }
    }
  }

  @media (max-width: ${variables.sm}) {
    > div {
      width: 100%;
      padding-left: 2.5%;
    }
    ul {
      li {
        margin-right: 0.5rem;
      }
    }
  }
`;

export default StyledToolNav;
