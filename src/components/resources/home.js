import React from 'react';
import { PageSubHeading } from '../../styles/PageHeading';
import { 
  ResourcesSection
} from '../../styles/Resources';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from '../../styles/variables';

const ResourceHome = () => (
  <ResourcesSection id="home">
    <PageSubHeading>Choose a resource to learn more about it.</PageSubHeading>
    <Styles>
      <div>
        <h3>Numbers</h3>
        <ul>
          <li><NavLink to="/resources/numbers-sino" exact activeClassName="active">Sino</NavLink></li>
          <li><NavLink to="/resources/numbers-pure" exact activeClassName="active">Pure</NavLink></li>
        </ul>
      </div>
      <div>
        <h3>Positions</h3>
        <ul>
          <li><NavLink to="/resources/positions" exact activeClassName="active">Positions</NavLink></li>
        </ul>
      </div>
      <div>
        <h3>Time</h3>
        <ul>
          <li><NavLink to="/resources/months" exact activeClassName="active">Months</NavLink></li>
          <li><NavLink to="/resources/days" exact activeClassName="active">Days</NavLink></li>
        </ul>
      </div>
    </Styles>
    
  </ResourcesSection>
);

const Styles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  h3 {
    font-size: 1.25rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      border-bottom: 0.5px solid ${variables.grey400};
      &:first-of-type {
        border-top: 0.5px solid ${variables.grey400};
      }
      a {
        padding: 1rem 0;
        font-size: 1rem;
        color: ${variables.black};
        text-decoration: none;
        display: block;
      }
    }
  }
`;

export default ResourceHome;