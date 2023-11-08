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
                  <div className="container">
                    <Icon icon="ph:calculator-fill" />
                    <h3>Calculator</h3>
                    <p>Practice <strong>numbers</strong> from 1 - 100 in both <em>Sino</em> and <em>Pure</em> systems.</p>
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
                    <Icon icon="ph:clock-fill" />
                    <h3>Clock</h3>
                    <p>Practice <strong>numbers</strong> in the context of time. 12h and 24h clocks available.</p>
                    <TagContainer>
                      <Tag>한 Keyboard</Tag>
                    </TagContainer>
                  </div>
                </Link>
              </TileItem>

              <TileItem className="positions">
                <Link to="/positions">
                  <div className="container">
                    <Icon icon="ph:shapes-fill" />
                    <h3>Positions</h3>
                    <p>Practice <strong>relative positions</strong> featuring members of TWICE.</p>
                    <TagContainer>
                      <Tag>Multiple Choice</Tag>
                    </TagContainer>
                  </div>
                </Link>
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
    .container {
      background: ${variables.white};
      border-radius: 0.5rem;
      padding: 1.5rem;
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
      .container {
        background: ${variables.grey100};
      }
    }
  }
  
  @media (max-width: ${variables.sm}) {
    a {
      .container {
        padding: 2rem 0 1rem 0;
        svg {
          font-size: 5rem;
        }      
      }
    }
  }
`;

export default Home;