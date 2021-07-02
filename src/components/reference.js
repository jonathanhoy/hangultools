import React from 'react';
import numToWordsMap from './util/mapping';
import Settings from '../styles/Settings';
import { Button, ButtonGroup } from '../styles/Button';
import ComponentContainer from '../styles/ComponentContainer';
import { Card, CardHeading, ReferenceCard } from '../styles/Card';
import { CalculatorList } from '../styles/List';
import { Wrapper, ComponentWrapper } from '../styles/Wrapper';
import { CalculatorContainer, Mathfield, MultipleChoice } from '../styles/calculator';
import { PageHeading, PageSubHeading, PageBody } from '../styles/PageHeading';
import { TableOfContents, ReferenceSection, ReferenceTable, ReferenceTableContainer } from '../styles/Reference';
 
class Reference extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <Wrapper>
          <PageHeading>Reference</PageHeading>
          <PageSubHeading>Table of Contents</PageSubHeading>
          <TableOfContents>
            <li><a href="#numbers">Numbers</a></li>
          </TableOfContents>

          <ReferenceSection id="numbers" className="numbers">
            <div>
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
            </div>
            <div>
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
            </div>
          </ReferenceSection>

          <ReferenceSection>
          </ReferenceSection>

      </Wrapper>
    )
  }
};

export default Reference;