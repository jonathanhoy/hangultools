/* eslint-disable array-callback-return */
import React from 'react';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading } from '../styles/PageHeading';
import { 
  ResourcesScroll, 
  TableOfContents,
} from '../styles/Resources';
import { ComponentLayout } from '../styles/Layout';
import Settings from '../styles/Settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ResourceHome from './resources/home';
import ResourceNumberSino from './resources/numbersSino';
import ResourceNumbersPure from './resources/numbersPure';
import ResourcePositions from './resources/positions';
import ResourceMonths from './resources/months';
import ResourceDays from './resources/days';

const Resources = () => (
  <Router>
    <ComponentLayout>
      <Wrapper>
        <ResourcesScroll>
          <PageHeading>Resources</PageHeading>
            <Route path="/resources" exact component={ResourceHome} />
            <Route path="/resources/numbers-sino" exact component={ResourceNumberSino} />
            <Route path="/resources/numbers-pure" exact component={ResourceNumbersPure} />
            <Route path="/resources/positions" exact component={ResourcePositions} />
            <Route path="/resources/months" exact component={ResourceMonths} />
            <Route path="/resources/days" exact component={ResourceDays} />
        </ResourcesScroll>
      </Wrapper>

      <Settings className='settings'>
        <Wrapper>
          <h2>Table of Contents</h2>
          <ul>
            <TableOfContents><NavLink to="/resources/numbers-sino" exact activeClassName="active">Numbers (Sino)</NavLink></TableOfContents>
            <TableOfContents><NavLink to="/resources/numbers-pure" exact activeClassName="active">Numbers (Pure)</NavLink></TableOfContents>
            <TableOfContents><NavLink to="/resources/positions" exact activeClassName="active">Positions</NavLink></TableOfContents>
            <TableOfContents><NavLink to="/resources/months" exact activeClassName="active">Months</NavLink></TableOfContents>
            <TableOfContents><NavLink to="/resources/days" exact activeClassName="active">Days</NavLink></TableOfContents>
          </ul>
        </Wrapper>
      </Settings>
    </ComponentLayout>
  </Router>
);

export default Resources;