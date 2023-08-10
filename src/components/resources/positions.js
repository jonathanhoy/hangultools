/* eslint-disable array-callback-return */
import React from 'react';
import { positionsMapping } from '../util/positionsMapping';
import { PageSubHeading } from '../../styles/PageHeading';
import { 
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer
} from '../../styles/Resources';


const ResourcePositions = () => (
  <ResourcesSection id="positions">
    <PageSubHeading>Positions</PageSubHeading>
    <ResourcesTableContainer>
      <ResourcesTable>
        <caption className="show-for-sr">Positions</caption>
        <thead>
          <tr>
            <th>Position</th>
            <th>Hangul</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(positionsMapping).map((position, i) => {
            return (
              <tr className={`row-${i+1}`}>
                <td>{position[1].eng.charAt(0).toUpperCase() + position[1].eng.slice(1)}</td>
                <td>{position[1].han}</td>
              </tr>
            )
          })}
        </tbody>
      </ResourcesTable>
    </ResourcesTableContainer>
  </ResourcesSection>
);

export default ResourcePositions;