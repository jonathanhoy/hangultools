import React from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import variables from '../styles/variables';
import { Wrapper } from '../styles/Wrapper';

class ToolNav extends React.Component {
  render() {
    return (
      <StyledToolNav>
        <Wrapper>
          <ul>
            <li><NavLink onClick={this.handleClose} to="/calculator" exact activeClassName="active"><i className="fas fa-calculator"></i> Calculator</NavLink></li>
            <li><NavLink onClick={this.handleClose} to="/clock" exact activeClassName="active"><i className="fas fa-clock"></i> Clock</NavLink></li>
          </ul>
        </Wrapper>
      </StyledToolNav>
    )
  }
};

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
    padding: 0.5rem 0;
    overflow: scroll;
    li {
      margin-right: 1rem;
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
        i {
          margin-right: 0.5rem;
        }
        &.active {
          background-color: ${variables.primary900};
          color: ${variables.white};
        }
      }
    }
  }

  @media (max-width: ${variables.sm}) {
    ul {
      li {
        margin-right: 0.5rem;
      }
    }
  }
`;

export default ToolNav;