import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageBody } from '../styles/PageHeading';
import { Tag, TagContainer } from '../styles/Tag';
import variables from '../styles/variables';

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <PageHeading>안녕하세요! Please choose a tool from the list.</PageHeading>
        <TileList>
          <TileItem className="calculator">
            <Link to="/calculator">
              <div className="top-container">
                <i className="fas fa-calculator"></i>
                <h3>Calculator</h3>
              </div>
            </Link>
            <TagContainer>
              <Tag home>한 Keyboard</Tag>
              <Tag home>Multiple Choice</Tag>
            </TagContainer>
          </TileItem>

          <TileItem className="clock">
            <Link to="/clock">
              <div className="top-container">
                <i className="fas fa-clock"></i>
                <h3>Clock</h3>
              </div>
            </Link>
            <TagContainer>
              <Tag home>한 Keyboard</Tag>
            </TagContainer>
          </TileItem>

          <TileItem className="positions">
            <Link to="/positions">
              <div className="top-container">
                <i className="fas fa-shapes"></i>
                <h3>Positions</h3>
              </div>
            </Link>
            <TagContainer>
              <Tag home>Multiple Choice</Tag>
            </TagContainer>
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
  a {
    text-decoration: none;
    color: ${variables.black};
    &:active, &:hover {
      color: ${variables.primary900};
    }
    .top-container {
      border-radius: 0.5rem;
      padding: 3rem 0 2rem 0;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2.5rem;
      justify-items: center;
      align-items: center;
      border: 2px solid ${variables.black};
      i {
        font-size: 6rem;
      }
      h3 {
        font-weight: 500;
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
  &:hover {
    a {
      border-color: ${variables.primary900};
      .top-container {
        background-color: ${variables.primary100};
        border-color: ${variables.primary900};
      }
    }
  }

  @media (max-width: ${variables.sm}) {
    a {
      .top-container {
        padding: 2rem 0 1rem 0;
        i {
          font-size: 5rem;
        }      
      }
    }
  }
`;

export default Home;