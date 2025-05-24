/* eslint-disable array-callback-return */
import React from 'react';
import { months } from '../util/monthsAndDaysMapping';
import { PageSubHeading } from '../../styles/PageHeading';
import {
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer
} from '../../styles/Resources';
import ResourcesTableOfContents from './tableofcontents';

const ResourceMonths = () => (
  <ResourcesSection id="months">
    <ResourcesTableOfContents/>
    <PageSubHeading>Months</PageSubHeading>
    <ResourcesTableContainer>
      <ResourcesTable>
        <caption className="show-for-sr">Months</caption>
        <thead>
          <tr>
            <th>Month</th>
            <th>Hangul</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(months).map((number, i) => {
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

export default ResourceMonths;