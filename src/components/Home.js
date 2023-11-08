import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageBody } from '../styles/PageHeading';
import { ComponentLayout, LayoutFix } from '../styles/Layout';
import Settings from '../styles/Settings';
import { Tag, TagContainer } from '../styles/Tag';
import variables from '../styles/variables';
import { Icon } from '@iconify/react';

class Home extends React.Component {
  render() {
    return (
      <ComponentLayout>
        <LayoutFix>
          <Wrapper className='home-wrapper'>
            <PageHeading>안녕하세요! Please choose a tool from the list.</PageHeading>
            <TileList>
              <TileItem className="calculator">
                <Link to="/calculator">
                  <div className="top-container">
                    <Icon icon="ph:calculator-fill" />
                    <h3>Calculator</h3>
                  </div>
                </Link>
                <TagContainer>
                  <Tag>한 Keyboard</Tag>
                  <Tag>Multiple Choice</Tag>
                </TagContainer>
              </TileItem>

              <TileItem className="clock">
                <Link to="/clock">
                  <div className="top-container">
                    <Icon icon="ph:clock-fill" />
                    <h3>Clock</h3>
                  </div>
                </Link>
                <TagContainer>
                  <Tag>한 Keyboard</Tag>
                </TagContainer>
              </TileItem>

              <TileItem className="positions">
                <Link to="/positions">
                  <div className="top-container">
                    <Icon icon="ph:shapes-fill" />
                    <h3>Positions</h3>
                  </div>
                </Link>
                <TagContainer>
                  <Tag>Multiple Choice</Tag>
                </TagContainer>
              </TileItem>


            </TileList>

            <PageBody>More tools coming soon!</PageBody>
          </Wrapper>
        </LayoutFix>

        <Settings className='settings'>
        </Settings>
      </ComponentLayout>
    )
  }
};


const TileList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 1rem;
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
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
      border: 1.5px solid ${variables.black};
      svg {
        font-size: 6rem;
      }
      h3 {
        font-weight: 500;
        font-size: 1.5rem;
        margin: 0;
      }
    }
    &:hover {
      border-color: ${variables.primary900};
      .top-container {
        border-color: ${variables.primary900};
      }
    }
  }
  
  @media (max-width: ${variables.sm}) {
    a {
      .top-container {
        padding: 2rem 0 1rem 0;
        svg {
          font-size: 5rem;
        }      
      }
    }
  }
`;

export default Home;