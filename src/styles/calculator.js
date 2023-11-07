import styled from 'styled-components';
import variables from './variables';

const CalculatorContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    display: block;
    text-align: center;
  }
  input[type="text"] {
    width: 100%;
    border: 1.5px solid ${variables.black};
    border-radius: 0.25rem;
    padding: 0.5rem 0.25rem;
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
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

const Mathfield = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 60px;
  border-bottom: 2px solid ${variables.black};
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

export { CalculatorContainer, Mathfield };