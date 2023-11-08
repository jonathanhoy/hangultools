import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageSubHeading, PageSubSectionHeading, PageBody } from '../styles/PageHeading';
import { ComponentLayout, LayoutFix } from '../styles/Layout';
import Settings from '../styles/Settings';
import { Tag } from '../styles/Tag';
import keysImage from '../assets/keys/all-keys.png';

const currentYear = new Date().getFullYear();
 
class About extends React.Component {
  render() {
    return (
      <ComponentLayout>
        <LayoutFix>
          <Wrapper className='about-wrapper'>
            <AboutStyles>
              <PageHeading>한글도구들로 한국어를 배우다</PageHeading>
              <PageSubHeading>Learn Korean with Hangul Tools</PageSubHeading>
              <PageBody>I originally built this app to help with memorizing Korean numbers. It has since grown to include things other than numbers that simply require memorization to learn and practice.</PageBody>
              <PageBody>The app isn't intended as a learning tool for someone who has not learned any of the content previously. It assumes some basic knowledge and practices repetition.</PageBody>
              
              <PageSubHeading>Different Ways to Learn</PageSubHeading>
              <PageBody>There are different ways to use each tool. Each tool is labelled with the ways to use that tool.</PageBody>
              <Tag>한 Keyboard</Tag>
              <PageBody>A tool with this label requires you to have a Korean keyboard installed on your device. Answers to questions should be written in words, not numbers.</PageBody>
              <PageBody>For example, if the question is <em>일 + 삼 (one + three)</em> the answer would be <em>사 (four)</em> and not <em>4</em>.</PageBody>
              <Tag>Multiple Choice</Tag>
              <PageBody>These tools may be used without a Korean keyboard. Select the answer from the choices.</PageBody>
              <img src={keysImage} alt="graphic of keyboard keys Q, W, A and S"/>
              <PageBody>If you're using a computer you may also press keys Q, W, A, and S to pick an answer.</PageBody>
              
              <PageSubHeading>Available Tools</PageSubHeading>
              <PageSubSectionHeading>Calculator</PageSubSectionHeading>
              <PageBody>This tool generates math problems for you to solve to help you memorize Korean numbers in both Sino and Pure number systems.</PageBody>
              <PageBody>The simple numbers option, turned on by default, will only use numbers 1 through 9. When turned off, problems will use numbers up to 99. Reference cards are available for each number system.</PageBody>
              
              <PageSubSectionHeading>Clock</PageSubSectionHeading>
              <PageBody>This tool asks you to write the time that is displayed. The clock can be switched between a 12-hour clock and a 24-hour clock. Note that the Pure number system is used for the hour and the Sino number system is used for minutes. Reference cards are available for each number system.</PageBody>

              <PageSubSectionHeading>Positions</PageSubSectionHeading>
              <PageBody>Featuring members of TWICE, this tool asks you to help locate the position of a member relative to where other members are. Reference cards are available for a quick introduction and each position.</PageBody>
      
              <PageBody className='ending'>Good luck in your studies! 화이팅!</PageBody>
              <PageBody>&copy; <a href="https://jonathanhoy.com" aria-label="Go to Jonathan Hoy's personal portfolio, opens in a new window" target="_blank" rel="noreferrer">Jonathan Hoy</a> {currentYear}</PageBody>
            </AboutStyles>
          </Wrapper>
        </LayoutFix>

        <Settings className='settings'>
        </Settings>
      </ComponentLayout>
    )
  }
};

const AboutStyles = styled.div`
  margin-bottom: 15rem;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
  h3 {
    margin-top: 2rem;
  }
  h4 {
    margin-top: 1.5rem;
  }
  img {
    max-width: 100px;
  }
 
  .ending {
    margin-top: 5rem;
  }
`;

export default About;