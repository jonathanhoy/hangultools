import React from 'react';
import numToWordsMap from './util/mapping';
import { months, days } from './util/monthsAndDaysMapping';
import Settings from '../styles/Settings';
import { Button, ButtonGroup } from '../styles/Button';
import ComponentContainer from '../styles/ComponentContainer';
import { Card, CardHeading, ReferenceCard } from '../styles/Card';
import { CalculatorList } from '../styles/List';
import { Wrapper, ComponentWrapper } from '../styles/Wrapper';
import { CalculatorContainer, Mathfield, MultipleChoice } from '../styles/calculator';
import { PageHeading, PageSubHeading, PageBody } from '../styles/PageHeading';
import { 
  ReferenceOuterContainer,
  ReferenceFixed, 
  ReferenceScroll, 
  TableOfContents, 
  ReferenceSection, 
  ReferenceTable, 
  ReferenceTableContainer
} from '../styles/Reference';
 
class Reference extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <Wrapper>
        <ReferenceOuterContainer>
          <ReferenceFixed>
            <PageHeading>Reference</PageHeading>
            <PageSubHeading>Table of Contents</PageSubHeading>
            <TableOfContents>
              <li><a href="#numbers-sino">Numbers (Sino)</a></li>
              <li><a href="#numbers-pure">Numbers (Pure)</a></li>
              <li><a href="#months">Months</a></li>
              <li><a href="#days">Days</a></li>
            </TableOfContents>
          </ReferenceFixed>

          <ReferenceScroll>
            <ReferenceSection id="numbers-sino" className="numbers-sino" >
              <PageSubHeading>Numbers (Sino)</PageSubHeading>
              <ReferenceTableContainer>
                <ReferenceTable>
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
                </ReferenceTable>
                <ReferenceTable>
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
                </ReferenceTable>
              </ReferenceTableContainer>
            </ReferenceSection>
            
            <ReferenceSection id="numbers-pure">
              <PageSubHeading>Numbers (Pure)</PageSubHeading>
              <ReferenceTableContainer>
                <ReferenceTable>
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
                </ReferenceTable>
                <ReferenceTable>
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
                </ReferenceTable>
              </ReferenceTableContainer>
            </ReferenceSection>

            <ReferenceSection id="months">
              <PageSubHeading>Months</PageSubHeading>
              <ReferenceTableContainer>
                <ReferenceTable>
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
                </ReferenceTable>
              </ReferenceTableContainer>
            </ReferenceSection>

            <ReferenceSection id="days">
              <PageSubHeading>Days</PageSubHeading>
              <ReferenceTableContainer>
                <ReferenceTable>
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
                </ReferenceTable>
              </ReferenceTableContainer>
            </ReferenceSection>

          </ReferenceScroll>
        </ReferenceOuterContainer>
      </Wrapper>
    )
  }
};

export default Reference;