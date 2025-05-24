/* eslint-disable array-callback-return */
import React from 'react';
import { PageSubHeading } from '../../styles/PageHeading';
import { NavLink } from 'react-router-dom';
import { StyledTableofContents, StyledTableofContentsItem } from '../../styles/ResourcesTableofContents';

const ResourcesTableOfContents = () => (
  <>
    <PageSubHeading>Topics</PageSubHeading>
    <StyledTableofContents id="" className="" >
      <StyledTableofContentsItem>
        <NavLink to="/resources/numbers-sino" exact activeClassName="active">Numbers (Sino)</NavLink>
      </StyledTableofContentsItem>
      <StyledTableofContentsItem>
        <NavLink to="/resources/numbers-pure" exact activeClassName="active">Numbers (Pure)</NavLink>
      </StyledTableofContentsItem>
      <StyledTableofContentsItem>
        <NavLink to="/resources/positions" exact activeClassName="active">Positions</NavLink>
      </StyledTableofContentsItem>
      <StyledTableofContentsItem>
        <NavLink to="/resources/months" exact activeClassName="active">Months</NavLink>
      </StyledTableofContentsItem>
      <StyledTableofContentsItem>
        <NavLink to="/resources/days" exact activeClassName="active">Days</NavLink> 
      </StyledTableofContentsItem>
    </StyledTableofContents>
  </>
);

export default ResourcesTableOfContents;