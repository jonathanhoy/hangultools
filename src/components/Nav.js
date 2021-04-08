import React from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';

import variables from '../styles/variables';
import { Wrapper } from '../styles/Wrapper';

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <Wrapper>
          <ul>
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/calculator" exact activeClassName="active">Calculator</NavLink></li>
            <li><NavLink to="/clock" exact activeClassName="active">Clock</NavLink></li>
            <li><NavLink to="/reference" exact activeClassName="active">Reference</NavLink></li>
            <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
          </ul>
        </Wrapper>
      </StyledNav>
    )
  }
};

const StyledNav = styled.nav`
  box-shadow: ${variables.boxshadow};
  background: ${variables.grey};
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    li {
      margin-right: 1.5rem;
      a {
        text-decoration: none;
        color: ${variables.black};
        font-size: 1rem;
        font-weight: 700;
        &.active {
          padding-bottom: 0.25rem;
          border-bottom: 0.25rem solid ${variables.primary};
        }
      }
    }
  }
`;

export default Nav;