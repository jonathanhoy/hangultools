/* eslint-disable array-callback-return */
import React from 'react';
import numToWordsMap from './util/mapping';
import { positionsMapping } from './util/positionsMapping';
import { months, days } from './util/monthsAndDaysMapping';
import { Wrapper } from '../styles/Wrapper';
import { PageHeading, PageSubHeading } from '../styles/PageHeading';
import { 
  ResourcesOuterContainer,
  ResourcesFixed, 
  ResourcesScroll, 
  TableOfContents, 
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer
} from '../styles/Resources';
import { Card, CardHeading } from '../styles/Card'; 


class Resources extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <Wrapper>
        <ResourcesOuterContainer>
          <ResourcesFixed>
            <PageHeading>Resources</PageHeading>
            <Card>
              <CardHeading className="settings-heading">Table of Contents</CardHeading>
              <ul>
                <TableOfContents><a href="#numbers-sino">Numbers (Sino)</a></TableOfContents>
                <TableOfContents><a href="#numbers-pure">Numbers (Pure)</a></TableOfContents>
                <TableOfContents><a href="#positions">Positions</a></TableOfContents>
                <TableOfContents><a href="#months">Months</a></TableOfContents>
                <TableOfContents><a href="#days">Days</a></TableOfContents>
              </ul>
            </Card>
          </ResourcesFixed>

          <ResourcesScroll>
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
            
            <ResourcesSection id="numbers-pure">
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

            <ResourcesSection id="months">
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

            <ResourcesSection id="days">
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

          </ResourcesScroll>
        </ResourcesOuterContainer>
      </Wrapper>
    )
  }
};

export default Resources;