import React from 'react';
import numToWordsMap from './util/mapping';
import Settings from '../styles/Settings';
import { Button, ButtonGroup } from '../styles/Button';
import ComponentContainer from '../styles/ComponentContainer';
import { Card, CardHeading, ReferenceCard } from '../styles/Card';
import { CalculatorList } from '../styles/List';
import { Wrapper, ComponentWrapper } from '../styles/Wrapper';
import { CalculatorContainer, Mathfield, MultipleChoice } from '../styles/calculator';
 
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      answer: 0,
      input: '',
      system: '',
      simpleNumbersToggle: true,
      multipleChoiceToggle: false,
      sinoToggle: false,
      pureToggle: false,
      multipleChoiceArr: [],
      checkedRadio: null,
    }
  }

  componentDidMount() {
    this.generateProblem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.simpleNumbersToggle !== prevState.simpleNumbersToggle) {
      this.generateProblem();
    }
  }

  generateProblem = () => {
    const system = (Math.floor(Math.random() * 2) + 1) === 1 ? 'sino' : 'pure';
    const x = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 99) + 1;
    const y = this.state.simpleNumbersToggle === true ? Math.floor(Math.random() * (10 - x)) + 1 : Math.floor(Math.random() * (100 - x)) + 1;
    const answer = this.convertNumToWord((x+y), system);
    let incorrect1;
    let incorrect2;
    let incorrect3;
    let tempArr;

    if (this.state.simpleNumbersToggle === false) {
      const shuffledArr = this.shuffleArray(Object.entries(numToWordsMap).filter(num => this.convertNumToWord(parseInt(num[0]), system) !== answer));
      [incorrect1, incorrect2, incorrect3] = [...shuffledArr];
      incorrect1 = incorrect1[1][system];
      incorrect2 = incorrect2[1][system];
      incorrect3 = incorrect3[1][system];
      tempArr = this.shuffleArray([answer, incorrect1, incorrect2, incorrect3]);
    } else if (this.state.simpleNumbersToggle === true) {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const shuffledArr = this.shuffleArray((arr.filter(num => this.convertNumToWord(num, system) !== answer)));
      [incorrect1, incorrect2, incorrect3] = [...shuffledArr];
      incorrect1 = this.convertNumToWord(incorrect1, system);
      incorrect2 = this.convertNumToWord(incorrect2, system);
      incorrect3 = this.convertNumToWord(incorrect3, system);
      tempArr = this.shuffleArray([answer, incorrect1, incorrect2, incorrect3]);
    };

    this.setState({
      x,
      y,
      answer,
      system,
      input: '',
      response: '',
      multipleChoiceArr: tempArr,
      checkedRadio: null,
    });
  }

  shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  validate = (e) => {
    e.preventDefault();
    if (this.state.input === this.state.answer) {
      this.setState({
        response: 'correct'
      })
    } else {
      this.setState({
        response: 'wrong'
      })
    } 
  }

  handleSingleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleMultipleChoice = (e) => {
    this.setState({
      input: e.target.value,
      checkedRadio: e.target.value
    })
  }

  convertNumToWord = (num, sys) => {
    if (numToWordsMap[num] !== undefined) {
      return numToWordsMap[num][sys];
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'sinoToggle') {
      this.setState({
        pureToggle: false,
        [e.target.id]: !this.state[e.target.id],
      })
    } else if (e.target.id === 'pureToggle') {
      this.setState({
        sinoToggle: false,
        [e.target.id]: !this.state[e.target.id],
      })
    } else {
      this.setState({
        [e.target.id]: !this.state[e.target.id],
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <ComponentContainer>
          <Settings className="settings">
            <Card>
              <div className="settings-container">
                <CardHeading className="settings-heading">Options</CardHeading>
                <ul className="settings-list option">
                  <li className="settings-item option">
                    <button className="settings-button" id="simpleNumbersToggle" onClick={this.handleClick} data-active={this.state.simpleNumbersToggle}>Simple Numbers</button>
                  </li>
                  <li className="settings-item option">
                    <button className="settings-button" id="multipleChoiceToggle" onClick={this.handleClick} data-active={this.state.multipleChoiceToggle}>Multiple Choice</button>
                  </li>
                </ul>
              </div>
              <div className="settings-container">
                <CardHeading className="settings-heading">Reference</CardHeading>
                <ul className="settings-list number">
                  <li className="settings-item number">
                    <button className="settings-button" id="sinoToggle" onClick={this.handleClick} data-active={this.state.sinoToggle}>Sino Numbers</button>
                  </li>
                  <li className="settings-item number">
                    <button className="settings-button" id="pureToggle" onClick={this.handleClick} data-active={this.state.pureToggle}>Pure Numbers</button>
                  </li>
                </ul>
              </div>
            </Card>
          </Settings>
          <CalculatorContainer className="component">
              <ComponentWrapper>
                <Mathfield>
                  <span className="numberX">{this.convertNumToWord(this.state.x, this.state.system)}</span>
                  <span className="operation">&#x2b;</span>
                  <span className="numberY">{this.convertNumToWord(this.state.y, this.state.system)} </span>
                </Mathfield>
              </ComponentWrapper>
              <form action="" onSubmit={this.validate}>
                {
                  this.state.multipleChoiceToggle === false &&
                  (
                    <ComponentWrapper>
                      <label htmlFor="input">Answer</label>
                      <input aria-label={`Type answer here`} type="text" id="input" name="input" onChange={this.handleSingleInput} value={this.state.input} placeholder="Answer"/>
                      <ButtonGroup>
                        <Button type="submit" className="check" theme="purple">Check</Button>
                        <Button type="button" className="next" onClick={this.generateProblem}>Next</Button>
                      </ButtonGroup>
                      {this.state.response === '' && <p>&nbsp;</p>}
                      {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p> }
                      {this.state.response === 'wrong' && <p><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.answer}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
                    </ComponentWrapper>
                  )
                }
                {
                  this.state.multipleChoiceToggle === true &&
                  <MultipleChoice>
                    <div className="container">
                      {
                        this.state.multipleChoiceArr.map((item) => {
                          return (
                            <>
                              <input aria-label={`Input for ${item}`} key={item} type="radio" name="multipleChoice" id={item} onClick={this.handleMultipleChoice} value={item} checked={this.state.checkedRadio === item} />
                              <label htmlFor={item}>
                                {item}
                              </label>
                            </>
                          )
                        })
                      }
                    </div>
                    <ComponentWrapper margin="auto">
                      <ButtonGroup>
                        <Button type="submit" theme="purple">Check</Button>
                        <Button type="button" onClick={this.generateProblem}>Next</Button>
                      </ButtonGroup>
                      {this.state.response === '' && <p>&nbsp;</p>}
                      {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p>}
                      {this.state.response === 'wrong' && <p><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.answer}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
                    </ComponentWrapper>
                  </MultipleChoice>
                }
              </form>
          </CalculatorContainer>
          <section className="reference">
            <ReferenceCard isVisible={this.state.sinoToggle} >
              <CardHeading>Sino Korean Numbers</CardHeading>
              <div>
                <CalculatorList digits="single">
                  <li><span>1</span><span>일</span></li>
                  <li><span>2</span><span>이</span></li>
                  <li><span>3</span><span>삼</span></li>
                  <li><span>4</span><span>사</span></li>
                  <li><span>5</span><span>오</span></li>
                  <li><span>6</span><span>육</span></li>
                  <li><span>7</span><span>칠</span></li>
                  <li><span>8</span><span>팔</span></li>
                  <li><span>9</span><span>구</span></li>
                </CalculatorList>
                <CalculatorList>
                  <li><span>10</span><span>십</span></li>
                  <li><span>20</span><span>이십</span></li>
                  <li><span>30</span><span>삼십</span></li>
                  <li><span>40</span><span>사십</span></li>
                  <li><span>50</span><span>오십</span></li>
                  <li><span>60</span><span>육십</span></li>
                  <li><span>70</span><span>칠십</span></li>
                  <li><span>80</span><span>팔십</span></li>
                  <li><span>90</span><span>구십</span></li>
                  <li><span>100</span><span>백</span></li>
                </CalculatorList>
              </div>
            </ReferenceCard>
            <ReferenceCard isVisible={this.state.pureToggle} >
              <CardHeading>Pure Korean Numbers</CardHeading>
              <div>
                <CalculatorList digits="single">
                  <li><span>1</span><span>하나</span></li>
                  <li><span>2</span><span>둘</span></li>
                  <li><span>3</span><span>셋</span></li>
                  <li><span>4</span><span>넷</span></li>
                  <li><span>5</span><span>다섯</span></li>
                  <li><span>6</span><span>여섯</span></li>
                  <li><span>7</span><span>일곱</span></li>
                  <li><span>8</span><span>여덟</span></li>
                  <li><span>9</span><span>아홉</span></li>
                </CalculatorList>
                <CalculatorList>
                  <li><span>10</span><span>열</span></li>
                  <li><span>20</span><span>스물</span></li>
                  <li><span>30</span><span>서른</span></li>
                  <li><span>40</span><span>마흔</span></li>
                  <li><span>50</span><span>쉰</span></li>
                  <li><span>60</span><span>예순</span></li>
                  <li><span>70</span><span>일흔</span></li>
                  <li><span>80</span><span>여든</span></li>
                  <li><span>90</span><span>아흔</span></li>
                  <li><span>100</span><span>백</span></li>
                </CalculatorList>
              </div>
            </ReferenceCard>
          </section>
        </ComponentContainer>
      </Wrapper>
    )
  }
};

export default Calculator;