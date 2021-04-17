import React from 'react';
import variables from '../styles/variables';
import styled from 'styled-components';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageBody } from '../styles/PageHeading';
 
class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <PageHeading>App overview</PageHeading>
        <PageBody>I built this app to help with memorizing Korean numbers in both the Sino and Pure/Native number systems. The calculator tool generates math problems for you to solve to help you memorize Korean numbers. The clock tool helps you to memorize numbers in the context of time.</PageBody>
        <PageBody>Understanding that each system is used in different situations, the app's intention is simply to practice memorization.</PageBody>
        <PageBody>Good luck in your studies!</PageBody>
        <PageBody>&copy; <a href="https://jonathanhoy.com" aria-label="Go to Jonathan Hoy's personal portfolio, opens in a new window" target="_blank" rel="noreferrer">Jonathan Hoy</a> 2021</PageBody>
      </Wrapper>
    )
  }
};

export default About;