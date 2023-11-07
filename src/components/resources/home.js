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
  </ResourcesSection>
);

export default ResourceHome;