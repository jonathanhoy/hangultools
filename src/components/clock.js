import React from 'react';
import { minuteToStrMap, hourToHangulMap, minuteToHangulMap } from './util/timeMapping';
import Settings from '../styles/Settings';
import { Button, ButtonGroup } from '../styles/Button';
import { Wrapper, ComponentWrapper } from '../styles/Wrapper';
import ComponentContainer from '../styles/ComponentContainer';
import { Card, CardHeading, ReferenceCard } from '../styles/Card';
import { ClockList } from '../styles/List';
import { ClockContainer, ClockField } from '../styles/clock';
import Keydown from './util/keydown';

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

  handleKeyDown = (e) => {
    // right arrow key 39
    if (e.keyCode === 39) {
      this.generateProblem();
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
          <ClockContainer className={`component ${this.state.sinoToggle === true ? 'refActive' : ''} ${this.state.pureToggle === true ? 'refActive' : ''}`}>
              <ComponentWrapper>
                <ClockField>
                  <p><span>{this.state.hour}</span><span>:</span><span>{this.state.minute}</span></p>
                </ClockField>
                <form action="" onSubmit={this.validate}>
                  <div className="inputGroupContainer">
                    <div className="inputGroup">
                      <input aria-label={`Type hour here`} className="hour" type="text" id="ansHour" name="ansHour" onChange={this.handleChange} value={this.state.ansHour} placeholder="???" />
                      <label htmlFor="ansHour">???</label>
                    </div>
                    <div className="inputGroup">
                      <input disabled={this.state.minute === "00" ? true : false} aria-label={`Type minute here`} className={this.state.minute === "00" ? "minute disabled" : "minute"} type="text" id="ansMinute" name="ansMinute" onChange={this.handleChange} value={this.state.ansMinute} placeholder={this.state.minute === "00" ? "" : "???"} />
                      <label htmlFor="ansMinute" className={this.state.minute === "00" ? "minute disabled" : "minute"}>???</label>
                    </div>
                  </div>
                  <div className="submitContainer">
                    <ButtonGroup>
                      <Button type="submit" theme="purple">Check</Button>
                      <Button type="button" onClick={this.generateProblem} className="next">Next</Button>
                    </ButtonGroup>
                  </div>
                  <div className="responseContainer">
                    {this.state.response === '' && <p>&nbsp;</p>}
                    {this.state.response === 'correct' && <p>?????????! <span role="img" aria-label="A celebration emoji">????</span></p>}
                    {this.state.response === 'wrong' && <p className="wrong"><span role="img" aria-label="An exclamation mark emoji">???</span>{this.state.hangulHour}??? {this.state.hangulMinute}{this.state.hangulMinute !== "" && "???"}</p>}
                  </div>
                </form>
              </ComponentWrapper>
          </ClockContainer>
          <section className={`reference ${this.state.sinoToggle === true ? 'refActive' : ''} ${this.state.pureToggle === true ? 'refActive' : ''}`}>
            <ReferenceCard isVisible={this.state.sinoToggle} >
              <CardHeading>Sino Korean Numbers</CardHeading>
              <div>
                <ClockList>
                  <li><span>1</span><span>???</span></li>
                  <li><span>2</span><span>???</span></li>
                  <li><span>3</span><span>???</span></li>
                  <li><span>4</span><span>???</span></li>
                  <li><span>5</span><span>???</span></li>
                  <li><span>6</span><span>???</span></li>
                  <li><span>7</span><span>???</span></li>
                  <li><span>8</span><span>???</span></li>
                  <li><span>9</span><span>???</span></li>
                </ClockList>
                <ClockList>
                  <li><span>10</span><span>???</span></li>
                  <li><span>20</span><span>??????</span></li>
                  <li><span>30</span><span>??????</span></li>
                  <li><span>40</span><span>??????</span></li>
                  <li><span>50</span><span>??????</span></li>
                </ClockList>
              </div>
            </ReferenceCard>
            <ReferenceCard isVisible={this.state.pureToggle} >
              <CardHeading>Pure Korean Numbers</CardHeading>
              <div>
                <ClockList>
                  <li><span>1</span><span>???</span></li>
                  <li><span>2</span><span>???</span></li>
                  <li><span>3</span><span>???</span></li>
                  <li><span>4</span><span>???</span></li>
                  <li><span>5</span><span>??????</span></li>
                  <li><span>6</span><span>??????</span></li>
                  <li><span>7</span><span>??????</span></li>
                  <li><span>8</span><span>??????</span></li>
                  <li><span>9</span><span>??????</span></li>
                  <li><span>10</span><span>???</span></li>
                  <li><span>11</span><span>??????</span></li>
                  <li><span>12</span><span>??????</span></li>
                </ClockList>
                <ClockList>
                  <li><span>13</span><span>??????</span></li>
                  <li><span>14</span><span>??????</span></li>
                  <li><span>15</span><span>?????????</span></li>
                  <li><span>16</span><span>?????????</span></li>
                  <li><span>17</span><span>?????????</span></li>
                  <li><span>18</span><span>?????????</span></li>
                  <li><span>19</span><span>?????????</span></li>
                  <li><span>20</span><span>??????</span></li>
                  <li><span>21</span><span>?????????</span></li>
                  <li><span>22</span><span>?????????</span></li>
                  <li><span>23</span><span>?????????</span></li>
                  <li><span>24</span><span>?????????</span></li>
                </ClockList>
              </div>
            </ReferenceCard>
          </section>
        </ComponentContainer>
      </Wrapper>
    )
  }
};

export default ClockComponent;