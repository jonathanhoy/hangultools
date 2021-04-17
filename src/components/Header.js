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
          <h1><span className="eng">Hangul Tools</span><span className="han">한글도구들</span></h1>
          <button className="mobile-nav-toggle" onClick={this.handleClick}>
              <i className="fas fa-bars fa-fw"></i>
              <i className="fas fa-times fa-fw"></i>
          </button>
        </Wrapper>
        <StyledNav mobileNavHidden={this.state.mobileNavHidden} >
          <ul>
            <li><NavLink onClick={this.handleClose} to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink onClick={this.handleClose} to="/calculator" exact activeClassName="active">Calculator</NavLink></li>
            <li><NavLink onClick={this.handleClose} to="/clock" exact activeClassName="active">Clock</NavLink></li>
            {/* <li><NavLink onClick={this.handleClose} to="/reference" exact activeClassName="active">Reference</NavLink></li> */}
            <li><NavLink onClick={this.handleClose} to="/about" exact activeClassName="active">About</NavLink></li>
          </ul>
        </StyledNav>
      </StyledHeader>
    )
  }
};

const StyledHeader = styled.header`
  background: ${variables.primary};
  box-shadow: ${variables.boxshadow};
  h1 {
    margin: 0;
    padding: 1rem 0;
    font-size: 2.5rem;
    color: ${variables.white};
    text-align: center;
    .han {
      display: none;
    }
  }
  .mobile-nav-toggle {
    display: none;
  }
  @media (max-width: ${variables.sm}) {
    position: relative;
    .mobile-nav-toggle {
      display: block;
      position: relative;
      z-index: 30;
      background: none;
      border: none;
      padding: 0;
      font-size: 1.5rem;
      .fa-bars {
        display: ${props => props.mobileNavHidden ? 'block' : 'none'};
        color: ${variables.white};
      }
      .fa-times {
        display: ${props => props.mobileNavHidden ? 'none' : 'block'};
        color: ${variables.black};
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
      .eng {
        display: ${props => props.mobileNavHidden ? 'block' : 'none'};
        color: ${variables.white};
      }
      .han {
        display: ${props => props.mobileNavHidden ? 'none' : 'block'};
        color: ${variables.black};
      }
    }
  }
`;

const StyledNav = styled.nav`
  background: ${variables.grey};
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
    top: 0;
    left: 0;
    right: 0;
    ul {
      flex-direction: column;
      width: 95%;
      margin: 0 auto;
      margin-top: 4rem;
      margin-bottom: 1rem;
      text-align: right;
      li {
        margin-bottom: 2rem;
        &:last-of-type {
          margin-bottom: 0;
          margin-right: 1.5rem;
        }
      }
    }
  }
`;

export default Header;
