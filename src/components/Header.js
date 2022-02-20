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
          <div className="container">
            <h1><NavLink onClick={this.handleClose} to="/" exact activeClassName="active">Hangul Tools</NavLink></h1>
            <nav>
              <ul>
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
  .container {
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

    nav {
      ul {
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

    button {
      display: none;
    }
  }


  @media (max-width: ${variables.sm}) {
    .container {
      h1 {
        position: relative;
        z-index: 30;
        padding: 0.5rem 0;
      }

      nav {
        display: ${props => props.mobileNavHidden === true ? 'none' : 'block'};
        position: absolute;
        background: ${variables.grey100};
        width: 100%;
        left: 0;
        z-index: 50;
        top: 63px;
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
  }
`;

export default Header;
