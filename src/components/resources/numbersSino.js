/* eslint-disable array-callback-return */
import React from 'react';
import numToWordsMap from '../util/mapping';
import { PageSubHeading } from '../../styles/PageHeading';
import { 
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer
} from '../../styles/Resources';


const ResourceNumberSino = () => (
  <ResourcesSection id="numbers-sino" className="numbers-sino" >
    <PageSubHeading>Numbers (Sino)</PageSubHeading>
    <ResourcesTableContainer>
      <ResourcesTable>
        <caption className="show-for-sr">Sino numbers 1 - 49</caption>
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
                  <td>{number[1].sino}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </ResourcesTable>
      <ResourcesTable>
        <caption className="show-for-sr">Sino numbers 50 - 100</caption>
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
                  <td>{number[1].sino}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </ResourcesTable>
    </ResourcesTableContainer>
  </ResourcesSection>
);

export default ResourceNumberSino;