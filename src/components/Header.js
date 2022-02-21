import React from "react"
import { NavLink } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import ToolNav from "./ToolNav";
import StyledHeader from "../styles/Header";

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      mobileNavHidden: true,
    }
  }  

  handleClick = () => {
    this.setState({
      mobileNavHidden: true,
    })
    if (this.state.mobileNavHidden === false) {
      this.setState({
        mobileNavHidden: true,
      })
    } else {
      this.setState({
        mobileNavHidden: false,
      })
    }
  }

  handleClose = () => {
    this.setState({
      mobileNavHidden: true,
    })
  }

  render() {
    return (
      <StyledHeader mobileNavHidden={this.state.mobileNavHidden} >
        <Wrapper>
          <div className="container">
            <h1>Hangul Tools</h1>
            <nav>
              <ul>
                <li><NavLink onClick={this.handleClose} to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink onClick={this.handleClose} to="/resources" exact activeClassName="active">Resources</NavLink></li>
                <li><NavLink onClick={this.handleClose} to="/about" exact activeClassName="active">About</NavLink></li>
              </ul>
            </nav>
            <button onClick={this.handleClick}>
                <i className="fas fa-bars fa-fw"></i>
                <i className="fas fa-times fa-fw"></i>
            </button>
          </div>
        </Wrapper>
        <ToolNav />
      </StyledHeader>
    )
  }
};

export default Header;
