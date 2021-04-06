import styled from 'styled-components';

const Settings = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 10px;
  .options-list {
    width: 175px;
    margin-top: 10px;
    border-radius: 5px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      list-style: none;
      margin-top: 5px;
    }
    .option,
    .number {
      grid-column: span 2;
    }
    @media (max-width: 599px) {
      width: 100%;
      grid-column-gap: 5px;
      margin-top: 0;
      .number {
        grid-column: span 1;
      }
    }
  }
  label {
    position: relative;
    padding: 5px;
    width: 100%;
    display: inline-block;
  }
  p {
    display: inline-block;
    font-weight: 600;
    margin: 0;
  }
  p.simpleNumbers {
    color: ${props => (props.simpleNumbersToggle === true ? 'white' : 'black')}
  }
  p.multipleChoice {
    color: ${props => (props.multipleChoiceToggle === true ? 'white' : 'black')}
  }
  p.sino {
    color: ${props => (props.sinoToggle === true ? 'white' : 'black')}
  }
  p.pure {
    color: ${props => (props.pureToggle === true ? 'white' : 'black')}
  }
  @media (max-width: 599px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    width: 100%;
    margin-top: 0;
    label {
      width: 100%;
      padding: 10px;
    }
    .options-list-item {
      width: 100%;
    }
    .reference-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5px;
    }
  }
  .mobileBlock {
    display: inline-block;
  }
  .mobileHide {
    display: none;
  }
`;

export default Settings;