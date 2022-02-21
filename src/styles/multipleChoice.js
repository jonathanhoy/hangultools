import styled from 'styled-components';
import variables from './variables';
import keyOne from '../assets/keys/key-1.png';
import keyTwo from '../assets/keys/key-2.png';
import keyThree from '../assets/keys/key-3.png';
import keyFour from '../assets/keys/key-4.png';

const MultipleChoice = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    display: inline-block;
    padding: 0.5rem;
    border: 2px solid #000;
    border-radius: 0.25rem;
    margin-top: 0;
    font-size: 1.5rem;
    &.multiple-choice-1, &.multiple-choice-2, &.multiple-choice-3, &.multiple-choice-4 {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        right: -2.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background-size: contain;
        background-repeat: no-repeat;
        @media (max-width: ${variables.md}) {
          display: none;
        }
      }
    }
    &.multiple-choice-1 {
      &:after {
        background-image: url(${keyOne});
      }
    }
    &.multiple-choice-2 {
      &:after {
        background-image: url(${keyTwo});
      }
    }
    &.multiple-choice-3 {
      &:after {
        background-image: url(${keyThree});
      }
    }
    &.multiple-choice-4 {
      &:after {
        background-image: url(${keyFour});
      }
    }
  }
  input[type="radio"]:checked+label {
    background-color: ${variables.primary900};
    border-color: ${variables.primary900};
    color: white;
  }
  label:hover {
    background-color: ${variables.primary100};
    border-color: ${variables.primary900};
    color: ${variables.primary900};
  }
  input[type="submit"] {
    grid-column: 0 / 4;
  }
  @media (max-width: 599px) {
    width: auto;
    .container {
      grid-gap: 5px;
      grid-template-columns: 1fr 1fr;
    }
    label {
      font-size: 1.25rem;
      padding: 0.25rem;
    }
  }
`;

export default MultipleChoice;