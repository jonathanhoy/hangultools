import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageBody } from '../styles/PageHeading';
import variables from '../styles/variables';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>안녕하세요! Please choose a tool from the list.</PageHeading>
        <TileList>
          <TileItem>
            <Link to="/calculator">
              <div>
                <p>Calculator</p>
              </div>
            </Link>
          </TileItem>

          <TileItem>
            <Link to="/clock">
              <div>
                <p>Clock</p>
              </div>
            </Link>
          </TileItem>

          <TileItem>
            <Link to="/reference">
              <div>
                <p>Reference</p>
              </div>
            </Link>
          </TileItem>

        </TileList>
      </Wrapper>
    )
  }
};


const TileList = styled.ul`
  display: flex;
`;

const TileItem = styled.li`
  background: ${variables.primary};
  margin: 0 2rem 2rem 0;
  div {
    display: flex;
    align-items: flex-end;
  }
  a {
    display: flex;
    align-items: flex-end;
    width: 300px;
    height: 350px;
    color: ${variables.white};
    text-decoration: none;
  }
`;

export default Home;