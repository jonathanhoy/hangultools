import React from "react"
import { NavLink } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import StyledToolNav from "../styles/ToolNav";

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

export default ToolNav;