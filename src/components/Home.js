import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageBody } from '../styles/PageHeading';
import variables from '../styles/variables';

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <PageHeading>안녕하세요! Please choose a tool from the list.</PageHeading>
        <TileList>
          <TileItem className="calculator">
            <Link to="/calculator">
              <div>
                <i className="fas fa-calculator"></i>
                <p>Calculator</p>
              </div>
            </Link>
          </TileItem>

          <TileItem className="clock">
            <Link to="/clock">
              <div>
                <i className="fas fa-clock"></i>
                <p>Clock</p>
              </div>
            </Link>
          </TileItem>

        </TileList>

        <PageBody>More tools coming soon!</PageBody>
      </Wrapper>
    )
  }
};


const TileList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TileItem = styled.li`
  border: 2px solid ${variables.black};
  border-radius: 0.5rem;
  a {
    text-decoration: none;
    color: ${variables.black};
    &:active, &:hover {
      color: ${variables.primary900};
    }
    div {
      padding: 3rem 0;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2.5rem;
      justify-items: center;
      align-items: center;
      i {
        font-size: 6rem;
      }
      p {
        font-weight: 400;
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
  &:hover {
    border: 2px solid ${variables.primary900};
    background-color: ${variables.primary100};
  }

  @media (max-width: ${variables.sm}) {
    a {
      div {
        padding: 2rem 0;
        i {
          font-size: 5rem;
        }
        p {
  
        }
        
      }
    }
  }
`;

export default Home;