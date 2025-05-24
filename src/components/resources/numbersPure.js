/* eslint-disable array-callback-return */
import React from 'react';
import numToWordsMap from '../util/mapping';
import { PageSubHeading } from '../../styles/PageHeading';
import { 
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer
} from '../../styles/Resources';
import ResourcesTableOfContents from './tableofcontents';

const ResourceNumbersPure = () => (
  <ResourcesSection id="numbers-pure">
    <ResourcesTableOfContents/>
    <PageSubHeading>Numbers (Pure)</PageSubHeading>
    <ResourcesTableContainer>
      <ResourcesTable>
        <caption className="show-for-sr">Pure numbers 1 - 49</caption>
        <thead>
          <tr>
            <th>Number</th>
            <th>Hangul</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(numToWordsMap).map((number, i) => {
            if (i+1 <= 49) {
              return (
                <tr className={`row-${i+1}`}>
                  <td>{number[0]}</td>
                  <td>{number[1].pure}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </ResourcesTable>
      <ResourcesTable>
        <caption className="show-for-sr">Pure numbers 50 - 100</caption>
        <thead>
          <tr>
            <th>Number</th>
            <th>Hangul</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(numToWordsMap).map((number, i) => {
            if (i+1 > 49) {
              return (
                <tr className={`row-${i+1}`}>
                  <td>{number[0]}</td>
                  <td>{number[1].pure}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </ResourcesTable>
    </ResourcesTableContainer>
  </ResourcesSection>
);

export default ResourceNumbersPure;