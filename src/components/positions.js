import React from "react";
import { positionsMapping } from './util/positionsMapping';
import Settings from '../styles/Settings';
import { Button, ButtonGroup } from '../styles/Button';
import ComponentContainer from '../styles/ComponentContainer';
import { Card, CardHeading, ReferenceCard } from '../styles/Card';
import { CharacterList, PositionsList } from '../styles/List';
import { Wrapper, ComponentWrapper } from '../styles/Wrapper';
import { PositionsContainer, PositionsField } from '../styles/positions';
import MultipleChoice from '../styles/multipleChoice';
import Keydown from './util/keydown';
import dahyun from '../assets/idols/dahyun.png';
import jihyo from '../assets/idols/jihyo.png';
import sana from '../assets/idols/sana.png';
 
class Positions extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      input: '',
      helperText: '',
      simpleNumbersToggle: false,
      multipleChoiceToggle: true,
      charactersToggle: false,
      positionsToggle: false,
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
    const shuffledArr = this.shuffleArray(Object.entries(positionsMapping));
    const [answer, incorrect1, incorrect2, incorrect3] = [...shuffledArr];
    const tempArr = this.shuffleArray([answer[1].han, incorrect1[1].han, incorrect2[1].han, incorrect3[1].han]);


    this.setState({
      answer: answer[1].han,
      class: answer[1].eng,
      helperText: answer[1].text,
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

  keypressValidate = () => {
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

  handleMultipleChoice = (e) => {
    this.setState({
      input: e.target.value,
      checkedRadio: e.target.value
    })
  }

  convertNumToWord = (num, sys) => {
    if (positionsMapping[num] !== undefined) {
      return positionsMapping[num][sys];
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'charactersToggle') {
      this.setState({
        positionsToggle: false,
        [e.target.id]: !this.state[e.target.id],
      })
    } else if (e.target.id === 'positionsToggle') {
      this.setState({
        charactersToggle: false,
        [e.target.id]: !this.state[e.target.id],
      })
    } else {
      this.setState({
        [e.target.id]: !this.state[e.target.id],
      })
    }
  }

  handleKeyDown = (e) => {
    // right arrow key 39
    // 1, 2, 3, 4 = 49, 50, 51, 52
    // q w 81 87
    // a s 65 83
    if (e.keyCode === 39) {
      this.generateProblem();
    } else if (e.keyCode === 81 && this.state.multipleChoiceToggle === true) {
      this.setState({
        input: this.state.multipleChoiceArr[0]
      })
      this.keypressValidate()
    } else if (e.keyCode === 87 && this.state.multipleChoiceToggle === true) {
      this.setState({
        input: this.state.multipleChoiceArr[1]
      })
      this.keypressValidate()
    } else if (e.keyCode === 65 && this.state.multipleChoiceToggle === true) {
      this.setState({
        input: this.state.multipleChoiceArr[2]
      })
      this.keypressValidate()
    } else if (e.keyCode === 83 && this.state.multipleChoiceToggle === true) {
      this.setState({
        input: this.state.multipleChoiceArr[3]
      })
      this.keypressValidate()
    }
  }

  render() {
    return (
      <Wrapper>
        <Keydown onKeyDown={this.handleKeyDown} />
        <ComponentContainer>
          <Settings className="settings">
            <Card>
              <div className="settings-container">
                <CardHeading className="settings-heading">Reference</CardHeading>
                <ul className="settings-list number">
                  <li className="settings-item number">
                    <button className="settings-button" id="charactersToggle" onClick={this.handleClick} data-active={this.state.charactersToggle}>Characters</button>
                  </li>
                  <li className="settings-item number">
                    <button className="settings-button" id="positionsToggle" onClick={this.handleClick} data-active={this.state.positionsToggle}>Positions</button>
                  </li>
                </ul>
              </div>
            </Card>
          </Settings>
          <PositionsContainer className={`component ${this.state.charactersToggle === true ? 'refActive' : ''} ${this.state.positionsToggle === true ? 'refActive' : ''}`}>
              <ComponentWrapper>
                <PositionsField className={this.state.class}>
                  <div className="image-container">
                    <img src={dahyun} alt="dahyun" class="avatar dahyun"/>
                    <img src={jihyo} alt="jihyo" class="avatar jihyo"/>
                    <img src={sana} alt="sana" class="avatar sana"/>
                  </div>
                </PositionsField>
                <p className="helper-text">{this.state.helperText}</p>
              </ComponentWrapper>
              <form action="" onSubmit={this.validate}>
                <MultipleChoice>
                  <div className="container">
                    {
                      this.state.multipleChoiceArr.map((item, i) => {
                        return (
                          <>
                            <input aria-label={`Input for ${item}`} key={item} type="radio" name="multipleChoice" id={item} onClick={this.handleMultipleChoice} value={item} checked={this.state.checkedRadio === item} />
                            <label htmlFor={item} className={`multiple-choice-${(i + 1)}`}>
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
                      <Button type="button" onClick={this.generateProblem} className="next">Next</Button>
                    </ButtonGroup>
                    {this.state.response === '' && <p>&nbsp;</p>}
                    {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p>}
                    {this.state.response === 'wrong' && <p><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.answer}<span role="img" aria-label="An exclamation mark emoji">❗</span></p>}
                  </ComponentWrapper>
                </MultipleChoice>
              </form>
          </PositionsContainer>
          <section className={`reference ${this.state.charactersToggle === true ? 'refActive' : ''} ${this.state.positionsToggle === true ? 'refActive' : ''}`}>
            <ReferenceCard isVisible={this.state.charactersToggle} >
              <CardHeading>Characters</CardHeading>
              <div>
                <CharacterList>
                  <li>
                    <img src={jihyo} alt="jihyo" class="avatar jihyo"/>
                    <p>저는 지효입니다.</p>
                  </li>
                  <li>
                    <img src={sana} alt="sana" class="avatar sana"/>
                    <p>저는 사나입니다.</p>
                  </li>
                  <li>
                    <img src={dahyun} alt="dahyun" class="avatar dahyun"/>
                    <p>저는 다현입니다.</p>
                  </li>
                </CharacterList>
              </div>
            </ReferenceCard>
            <ReferenceCard isVisible={this.state.positionsToggle} >
              <CardHeading>Positions</CardHeading>
              <div>
                <PositionsList>
                  <li><span>Above</span><span>위</span></li>
                  <li><span>Beside</span><span>옆</span></li>
                  <li><span>Under</span><span>밑</span></li>
                  <li><span>Between</span><span>사이</span></li>
                  <li><span>Front</span><span>앞</span></li>
                  <li><span>Behind</span><span>뒤</span></li>
                </PositionsList>
              </div>
            </ReferenceCard>
          </section>
        </ComponentContainer>
      </Wrapper>
    )
  }
};

export default Positions;