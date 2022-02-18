import React from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';
import variables from '../styles/variables';
import { Wrapper } from '../styles/Wrapper';

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
          <h1><NavLink onClick={this.handleClose} to="/" exact activeClassName="active">Hangul Tools</NavLink></h1>
          <button className="mobile-nav-toggle" onClick={this.handleClick}>
              <i className="fas fa-bars fa-fw"></i>
              <i className="fas fa-times fa-fw"></i>
          </button>
        </Wrapper>
        <StyledNav mobileNavHidden={this.state.mobileNavHidden} >
          <Wrapper>
            <ul className="tool-nav">
              <li><NavLink onClick={this.handleClose} to="/calculator" exact activeClassName="active">Calculator</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/clock" exact activeClassName="active">Clock</NavLink></li>
            </ul>
            <ul className="site-nav">
              <li><NavLink onClick={this.handleClose} to="/reference" exact activeClassName="active">Reference</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/about" exact activeClassName="active">About</NavLink></li>
            </ul>
          </Wrapper>
        </StyledNav>
      </StyledHeader>
    )
  }
};

const StyledHeader = styled.header`
  background: ${variables.primary};
  box-shadow: ${variables.boxshadow};
  position: fixed;
  left: 0;
  right: 0;
  z-index: 30;
  > div {
    padding-top: 0;
  }
  h1 {
    margin: 0;
    padding: 1rem 0;
    font-size: 2.5rem;
    color: ${variables.white};
    a {
      text-decoration: none;
      color: ${variables.white};
    }
  }
  .mobile-nav-toggle {
    display: none;
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
  }
`;

const StyledNav = styled.nav`
  background: ${variables.grey};
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
  }
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    li {
      margin-right: 1.5rem;
      &:last-of-type {
        margin-right: 0;
      }
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
  @media (max-width: ${variables.sm}) {
    box-shadow: ${variables.boxshadow};
    display: ${props => props.mobileNavHidden === true ? 'none' : 'block'};
    position: absolute;
    z-index: 20;
    left: 0;
    right: 0;
    > div {
    align-items: flex-start;
    
    }
    ul {
      flex-direction: column;
      width: 95%;
      margin: 0 auto;
      margin: 1rem 0;
      padding: 0;
      li {
        margin-bottom: 2rem;
        margin-right: 0;
        &:last-of-type {
          margin-bottom: 0;
        }
        a {
          font-size: 1.5rem;
        }
      }
      &.site-nav {
        text-align: left;
      }
      &.tool-nav {
        text-align: right;
      }
    }
  }
`;

export default Header;
