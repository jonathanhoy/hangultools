import React from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import variables from '../styles/variables';
import { Wrapper } from '../styles/Wrapper';
import ToolNav from "./ToolNav";

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
          <div className="top-nav">
            <h1><NavLink onClick={this.handleClose} to="/" exact activeClassName="active">Hangul Tools</NavLink></h1>
            <ul className="desktop-top-nav">
              <li><NavLink onClick={this.handleClose} to="/resources" exact activeClassName="active">Resources</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/about" exact activeClassName="active">About</NavLink></li>
            </ul>
          </div>
          <button className="mobile-nav-toggle" onClick={this.handleClick}>
              <i className="fas fa-bars fa-fw"></i>
              <i className="fas fa-times fa-fw"></i>
          </button>
        </Wrapper>
        <ToolNav />
      </StyledHeader>
    )
  }
};

const StyledHeader = styled.header`
  background: ${variables.primary900};
  position: fixed;
  left: 0;
  right: 0;
  z-index: 30;
  border-bottom: 1px solid ${variables.grey400};
  > div {
    padding-top: 0;
  }
  h1 {
    margin: 0;
    padding: 1rem 0;
    font-size: 2.5rem;
    color: ${variables.white};
    font-weight: 600;
    a {
      text-decoration: none;
      color: ${variables.white};
    }
  }
  .mobile-nav-toggle {
    display: none;
  }
  .top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .desktop-top-nav {
      display: flex;
      li {
        margin-right: 1.5rem;
        &:last-of-type {
          margin-right: 0;
        }
        a {
          text-decoration: none;
          color: ${variables.white};
          font-size: 1.25rem;
          font-weight: 600;
          &:hover {
            color: ${variables.primary100};
          }
        }
      }
    }
  }
  @media (max-width: ${variables.sm}) {
    position: fixed;
    .mobile-nav-toggle {
      display: block;
      position: relative;
      background: none;
      border: none;
      padding: 0;
      font-size: 1.5rem;
      i {
        color: ${variables.white};
      }
      .fa-bars {
        display: ${props => props.mobileNavHidden ? 'block' : 'none'};
      }
      .fa-times {
        display: ${props => props.mobileNavHidden ? 'none' : 'block'};
      }
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      text-align: left;
      position: relative;
      z-index: 30;
      padding: 0.5rem 0;
      color: ${variables.white};
    }
    .top-nav {
      .desktop-top-nav {
        display: none;  
      }
    }
  }
`;

export default Header;
