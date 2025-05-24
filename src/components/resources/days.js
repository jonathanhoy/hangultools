/* eslint-disable array-callback-return */
import React from 'react';
import { days } from '../util/monthsAndDaysMapping';
import { PageSubHeading } from '../../styles/PageHeading';
import { 
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer
} from '../../styles/Resources';
import ResourcesTableOfContents from './tableofcontents';

const ResourceDays = () => (
  <ResourcesSection id="days">
    <ResourcesTableOfContents/>
    <PageSubHeading>Days</PageSubHeading>
    <ResourcesTableContainer>
      <ResourcesTable>
        <caption className="show-for-sr">Days</caption>
        <thead>
          <tr>
            <th>Day</th>
            <th>Hangul</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(days).map((number, i) => {
            if (i+1 <= 49) {
              return (
                <tr className={`row-${i+1}`}>
                  <td>{number[1].eng}</td>
                  <td>{number[1].han}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </ResourcesTable>
    </ResourcesTableContainer>
  </ResourcesSection>
);

export default ResourceDays;