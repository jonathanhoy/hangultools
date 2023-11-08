import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading } from '../styles/PageHeading';
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
            <PageHeading>안녕하세요! Please choose a tool to begin learning.</PageHeading>
            <TileList>
              <TileItem className="calculator">
                <Link to="/calculator">
                  <div className="container">
                    <div className='top'>
                      <Icon icon="ph:calculator-fill" />
                      <h3>Calculator</h3>
                      <p>Practice <strong>numbers</strong> from 1 - 100 in both <em>Sino</em> and <em>Pure</em> systems.</p>
                    </div>
                    <TagContainer>
                      <Tag>한 Keyboard</Tag>
                      <Tag>Multiple Choice</Tag>
                    </TagContainer>
                  </div>
                </Link>
              </TileItem>
              <TileItem className="clock">
                <Link to="/clock">
                  <div className="container">
                    <div className='top'>
                      <Icon icon="ph:clock-fill" />
                      <h3>Clock</h3>
                      <p>Practice <strong>numbers</strong> in the context of time. 12h and 24h clocks available.</p>
                    </div>
                    <TagContainer>
                      <Tag>한 Keyboard</Tag>
                    </TagContainer>
                  </div>
                </Link>
              </TileItem>
              <TileItem className="positions">
                <Link to="/positions">
                  <div className="container">
                    <div className='top'>
                      <Icon icon="ph:shapes-fill" />
                      <h3>Positions</h3>
                      <p>Practice <strong>relative positions</strong> featuring members of TWICE.</p>
                    </div>
                    <TagContainer>
                      <Tag>Multiple Choice</Tag>
                    </TagContainer>
                  </div>
                </Link>
              </TileItem>
            </TileList>
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-bottom: 1rem;
  @media (max-width: ${variables.xl}) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

const TileItem = styled.li`
  a {
    text-decoration: none;
    color: ${variables.black};
    height: 100%;
    display: block;
    background: ${variables.white};
    border-radius: 0.5rem;
    .container {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      svg {
        font-size: 3rem;
        margin-bottom: 2rem;
      }
      h3 {
        font-weight: 500;
        font-size: 1.75rem;
        margin: 0;
      }
      p {
        font-size: 0.875rem;
      }
    }
    &:hover {
      background: ${variables.grey100};
    }
  }
  
  @media (max-width: ${variables.sm}) {
    a {
      .container {
        padding: 1rem;
        svg {
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`;

export default Home;