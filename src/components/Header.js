import React from "react"
import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import variables from "../styles/variables";

import { Icon } from '@iconify/react';

class LeftMenu extends React.Component {

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
        <Wrapper>
          <h1><NavLink onClick={this.handleClose} to="/" exact activeClassName="active">Hangul Tools</NavLink></h1>
          <ToolNav>
            <h2>Tools</h2>
            <ul>
              <li><NavLink onClick={this.handleClose} to="/calculator" exact activeClassName="active"><Icon icon="ph:calculator-fill" />Calculator</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/clock" exact activeClassName="active"><Icon icon="ph:clock-fill" /> Clock</NavLink></li>
              <li><NavLink onClick={this.handleClose} to="/positions" exact activeClassName="active"><Icon icon="ph:shapes-fill" /> Positions</NavLink></li>
            </ul>
          </ToolNav>
          <SiteNav>
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
    nav {
      display: ${props => props.mobileNavHidden === true ? 'none' : 'block'};
      position: absolute;
      background: ${variables.grey100};
      width: 100%;
      left: 0;
      z-index: 50;
      top: 65px;
      padding: 1.5rem 0;
      border-bottom: 1px solid ${variables.grey400};
  
      ul {
        width: 95%;
        margin: 0 auto;
        flex-direction: column;
        align-items: flex-end;
  
        li {
          margin: 1rem 0;
          a {
            color: ${variables.black};
          }
        }
      }
    }
    button {
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
      }
    }
  }
`;

const ToolNav = styled.nav`
  ${baseNavStyles}
`;

const SiteNav = styled.nav`
  ${baseNavStyles}
`;

export default LeftMenu;
