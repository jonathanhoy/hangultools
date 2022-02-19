import React from 'react';
import { minuteToStrMap, hourToHangulMap, minuteToHangulMap } from './util/timeMapping';
import Settings from '../styles/Settings';
import { Button, ButtonGroup } from '../styles/Button';
import { Wrapper, ComponentWrapper } from '../styles/Wrapper';
import ComponentContainer from '../styles/ComponentContainer';
import { Card, CardHeading, ReferenceCard } from '../styles/Card';
import { ClockList } from '../styles/List';
import { ClockContainer, ClockField } from '../styles/clock';

class ClockComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      ansHour: '',
      ansMinute: '',
      hangulHour: '',
      hangulMinute: '',
      sinoToggle: false,
      pureToggle: false,
      response: '',
      twelveHourClock: true,
      twentyFourHourClock: false,
    }
  }

  componentDidMount() {
    this.generateProblem();
  }

  generateProblem = () => {
    let hour;
    if (this.state.twelveHourClock === true ) {
      hour = (Math.floor(Math.random() * 12) + 1).toString();
    } else {
      hour = (Math.floor(Math.random() * 24) + 1).toString();
    }
    const minute = this.convertMinuteToStr(Math.floor(Math.random() * 59 ));
    const hangulHour = this.convertNumToHangul(hour, "hour");
    const hangulMinute = this.convertNumToHangul(minute, "minute");
    this.setState({
      hour,
      hangulHour,
      minute,
      hangulMinute,
      response: '',
      ansHour: '',
      ansMinute: '',
    });
  }

  convertMinuteToStr = (min) => {
    if (minuteToStrMap[min] !== undefined) {
      return minuteToStrMap[min].output;
    } else {
      return min.toString();
    }
  }

  validate = (e) => {
    e.preventDefault();
    if (this.state.ansHour === this.state.hangulHour && this.state.ansMinute === this.state.hangulMinute) {
      this.setState({
        response: 'correct'
      })
    } else {
      this.setState({
        response: 'wrong'
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  convertNumToHangul = (num, time) => {
    if (hourToHangulMap[num] !== undefined && time === "hour") {
      return hourToHangulMap[num];
    } else if (minuteToHangulMap[num] !== undefined && time === "minute") {
      return minuteToHangulMap[num];
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
    } else if (e.target.id === 'twelveHourClock' && this.state.twelveHourClock === true) {
      return;
    } else if (e.target.id === 'twelveHourClock' && this.state.twelveHourClock === false) {
      this.setState({
        twelveHourClock: true,
        twentyFourHourClock: false,
      })
    } else if (e.target.id === 'twentyFourHourClock' && this.state.twentyFourHourClock === true) {
      return;
    } else if (e.target.id === 'twentyFourHourClock' && this.state.twentyFourHourClock === false) {
      this.setState({
        twelveHourClock: false,
        twentyFourHourClock: true,
      })
    }
    else {
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
                    <button className="settings-button" id="twelveHourClock" onClick={this.handleClick} data-active={this.state.twelveHourClock}>12-hour</button>
                  </li>
                  <li className="settings-item option">
                    <button className="settings-button" id="twentyFourHourClock" onClick={this.handleClick} data-active={this.state.twentyFourHourClock}>24-hour</button>
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
          <ClockContainer className="component">
              <ComponentWrapper>
                <ClockField>
                  <p><span>{this.state.hour}</span><span>:</span><span>{this.state.minute}</span></p>
                </ClockField>
                <form action="" onSubmit={this.validate}>
                  <div className="inputGroupContainer">
                    <div className="inputGroup">
                      <input aria-label={`Type hour here`} className="hour" type="text" id="ansHour" name="ansHour" onChange={this.handleChange} value={this.state.ansHour} placeholder="" />
                      <label htmlFor="ansHour">시</label>
                    </div>
                    <div className="inputGroup">
                      <input disabled={this.state.minute === "00" ? true : false} aria-label={`Type minute here`} className={this.state.minute === "00" ? "minute disabled" : "minute"} type="text" id="ansMinute" name="ansMinute" onChange={this.handleChange} value={this.state.ansMinute} placeholder="" />
                      <label htmlFor="ansMinute" className={this.state.minute === "00" ? "minute disabled" : "minute"}>분</label>
                    </div>
                  </div>
                  <div className="submitContainer">
                    <ButtonGroup>
                      <Button type="submit" theme="purple">Check</Button>
                      <Button type="button" onClick={this.generateProblem}>Next</Button>
                    </ButtonGroup>
                  </div>
                  <div className="responseContainer">
                    {this.state.response === '' && <p>&nbsp;</p>}
                    {this.state.response === 'correct' && <p>맞아요! <span role="img" aria-label="A celebration emoji">🎉</span></p>}
                    {this.state.response === 'wrong' && <p class="wrong"><span role="img" aria-label="An exclamation mark emoji">❗</span>{this.state.hangulHour} 시 {this.state.hangulMinute} {this.state.hangulMinute !== "" && "분"}</p>}
                  </div>
                </form>
              </ComponentWrapper>
          </ClockContainer>
          <section className="reference">
            <ReferenceCard isVisible={this.state.sinoToggle} >
              <CardHeading>Sino Korean Numbers</CardHeading>
              <ClockList digits="single">
                <li><span>1</span><span>일</span></li>
                <li><span>2</span><span>이</span></li>
                <li><span>3</span><span>삼</span></li>
                <li><span>4</span><span>사</span></li>
                <li><span>5</span><span>오</span></li>
                <li><span>6</span><span>육</span></li>
                <li><span>7</span><span>칠</span></li>
                <li><span>8</span><span>팔</span></li>
                <li><span>9</span><span>구</span></li>
                <li><span>10</span><span>십</span></li>
              </ClockList>
            </ReferenceCard>
            <ReferenceCard isVisible={this.state.pureToggle} >
              <CardHeading>Pure Korean Numbers</CardHeading>
              <ClockList digits="single">
                <li><span>1</span><span>하나 / 한</span></li>
                <li><span>2</span><span>둘 / 두</span></li>
                <li><span>3</span><span>셋 / 세</span></li>
                <li><span>4</span><span>넷 / 네</span></li>
                <li><span>5</span><span>다섯</span></li>
                <li><span>6</span><span>여섯</span></li>
                <li><span>7</span><span>일곱</span></li>
                <li><span>8</span><span>여덟</span></li>
                <li><span>9</span><span>아홉</span></li>
                <li><span>10</span><span>열</span></li>
              </ClockList>
            </ReferenceCard>
          </section>
        </ComponentContainer>
      </Wrapper>
    )
  }
};

export default ClockComponent;