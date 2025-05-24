import React from 'react';
import { PageSubHeading } from '../../styles/PageHeading';
import { 
  ResourcesSection
} from '../../styles/Resources';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ResourcesTableOfContents from './tableofcontents';

const ResourceHome = () => (
  <ResourcesSection id="home">
    <ResourcesTableOfContents/>
  </ResourcesSection>
);

export default ResourceHome;