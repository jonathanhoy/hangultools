import styled from 'styled-components';
import variables from './variables';

const CalculatorContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    margin-top: 1.5rem;
    display: block;
    text-align: center;
    font-weight: 600;
  }
  input[type="text"] {
    width: 100%;
    border: 2px solid ${variables.black};
    border-radius: 0.25rem;
    padding: 0.25rem;
    margin: 1rem 0;
    text-align: center;
    font-size: 2rem;
  }
  form p {
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0 0 0;
    line-height: 1;
  }
  label[for="input"] { 
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  @media (max-width: ${variables.sm}) {
    form {
      width: 100%;
    }
    grid-column: 2 / 3;
    /* grid-row: 2 / 4; */
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 60px;
  border-bottom: 3px solid ${variables.black};
  span {
    font-size: 3rem;
  }
  .numberX {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
  }
  .numberY {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: end;
  }
  .operation {
    width: 1.5rem;
    height: 1.5rem;
    grid-row: 2 / 3;
  }
`;

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

export { CalculatorContainer, Mathfield, MultipleChoice };