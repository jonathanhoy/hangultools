import styled from "styled-components"
import variables from '../styles/variables';

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
        top: 64px;
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

export default StyledHeader;
