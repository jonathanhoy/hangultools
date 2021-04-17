import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageBody } from '../styles/PageHeading';
import { Card } from '../styles/Card';
import variables from '../styles/variables';

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <PageHeading>안녕하세요! Please choose a tool from the list.</PageHeading>
        <TileList>
          <TileItem className="calculator">
            <Link to="/calculator">
              <Card>
                <i class="fas fa-calculator"></i>
                <p>Calculator</p>
                <i class="fas fa-arrow-right"></i>
              </Card>
            </Link>
          </TileItem>

          <TileItem className="clock">
            <Link to="/clock">
              <Card>
                <i class="fas fa-clock"></i>
                <p>Clock</p>
                <i class="fas fa-arrow-right"></i>
              </Card>
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TileItem = styled.li`
  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${variables.black};
    &:active, &:hover {
      color: ${variables.primary};
    }
    p {
      margin: 1rem 0;
      justify-self: left;
    }
    div {
      width: 100%;
      display: grid;
      grid-template-columns: 3rem 1fr 3rem;
      grid-gap: 1rem;
      justify-items: center;
      align-items: center;
    }
  }
`;

export default Home;