import React from "react"
import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import variables from "../styles/variables";
import { Icon } from '@iconify/react';

class Nav extends React.Component {

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
      <NavStyles mobileNavHidden={this.state.mobileNavHidden} >
        <Wrapper className="nav-wrapper">
          <h1><NavLink onClick={this.handleClose} to="/" exact activeClassName="active">Hangul Tools</NavLink></h1>
          <ToolNav>
            <h2>Tools</h2>
            <ul>
              <li><NavLink onClick={this.handleClose} to="/calculator" exact activeClassName="active"><Icon icon="ph:calculator-fill" />Calculator</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/clock" exact activeClassName="active"><Icon icon="ph:clock-fill" /> Clock</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/positions" exact activeClassName="active"><Icon icon="ph:shapes-fill" /> Positions {/* <span className="new" aria-hidden="true">new</span>*/}</NavLink></li>
            </ul>
          </ToolNav>
          <SiteNav mobileNavHidden={this.state.mobileNavHidden}>
            <h2>Pages</h2>
            <ul>
              <li><NavLink onClick={this.handleClose} to="/" exact activeClassName="active"><Icon icon="ph:house-fill" /> Home</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/resources" exact activeClassName="active"><Icon icon="ph:book-fill" /> Resources</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/about" exact activeClassName="active"><Icon icon="ph:info-fill" /> About</NavLink></li>
            </ul>
          </SiteNav>
          <button onClick={this.handleClick}>
              <i className="fas fa-bars fa-fw"></i>
              <i className="fas fa-times fa-fw"></i>
          </button>
        </Wrapper>
      </NavStyles>
    )
  }
};

const NavStyles = styled.div`
  background: ${variables.grey100};
  border-right: 0.5px solid ${variables.grey400};
  height: 100dvh;
  box-shadow: rgba(0, 0, 0, 0.06) 0px -2px 4px 0px inset;

  h1 {
    font-size: 2rem;
    a {
      color: ${variables.black};
      text-decoration: none;
    }
  }
  button {
    display: none;
  }

  @media (max-width: ${variables.sm}) {
    background: ${variables.white};
    height: auto;
    grid-column: 1 / 3;
    box-shadow: none;
    border-right: none;
    h1 {
      margin: 0.5rem 0;
    }
    .nav-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 95%;
    }
    nav {
      position: absolute;
      background: ${variables.white};
      width: 100%;
      left: 0;
      z-index: 50;
      border-bottom: 1px solid ${variables.grey400};
  
    }
    button {
      display: block;
      position: relative;
      background: none;
      border: none;
      padding: 0;
      font-size: 1.5rem;
      i {
        color: ${variables.black};
      }
      .fa-bars {
        display: ${props => props.mobileNavHidden ? 'block' : 'none'};
      }
      .fa-times {
        display: ${props => props.mobileNavHidden ? 'none' : 'block'};
      }
    }
  }
`;

const baseNavStyles = css`
  margin-top: 2rem;
  h2 {
    font-size: 1rem;
    color: ${variables.grey900};
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    li {
      a {
        padding: 0.5rem 0.75rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.75rem;
        color: ${variables.black};
        border-radius: ${variables.brsmall};
        font-size: 0.875rem;
        position: relative;
        svg {
          width: 1.25rem;
          height: 1.25rem;
        }
        &:hover {
          background: ${variables.grey200};
        }
        &.active {
          background: ${variables.white};
          box-shadow: ${variables.boxshadow};
        }
        .new {
          font-size: 0.625rem;
          text-transform: uppercase;
          font-weight: 600;
          color: ${variables.white};
          background: ${variables.primary900};
          padding: 0.125rem 0.25rem;
          border-radius: 2px;
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          &::after {
          }
        }
      }
    }
  }
  @media (max-width: ${variables.sm}) {
    ul {
      li {
        a {
          background: ${variables.grey100};
          &.active {
            background: ${variables.primary900};
            color: ${variables.white};
          }
        }
      }
    }
  }
`;

const ToolNav = styled.nav`
  ${baseNavStyles}
  @media (max-width: ${variables.sm}) {
    /* outline: 1px solid red; */
    margin-top: 0;
    padding: 0;
    top: 54px;
    h2 {
      display: none;
    }
    ul {
      width: 95%;
      margin: 0 auto;
      align-items: flex-start;
      flex-direction: row;
      li {
        margin: 0.25rem 0;
        a {
          color: ${variables.black};
        }
      }
    }
  }
`;

const SiteNav = styled.nav`
  ${baseNavStyles}
  @media (max-width: ${variables.sm}) {
    display: ${props => props.mobileNavHidden === true ? 'none' : 'block'};
    top: 98px;
    padding: 0.5rem 0;
    margin-top: 0;
    h2, ul {
      width: 95%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default Nav;
