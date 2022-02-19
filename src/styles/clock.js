import styled from 'styled-components';
import variables from './variables';

const ClockContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-wrap: wrap;
    .inputGroupContainer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 1rem;
    }
    .inputGroup {
      display: flex;
      align-items: center;
      label {
        font-weight: 600;
        margin-left: 0.25rem;
        margin-top: 0.25rem;
        font-size: 24px;
      }
      input {
        border: 2px solid ${variables.black};
        border-radius: 0.25rem;
        padding: 0.25rem;
        margin: 0.5rem 0 0 0;
        text-align: center;
        font-size: 18px;
        width: 74px;
      }th: 74px;
      }
      input.disabled {
        border: 2px solid lightgrey;
      }
      label.disabled {
        color: lightgrey;
      }
    }
    p {
      text-align: center;
      font-size: 2rem;
      margin: 3rem 0 0 0;
      line-height: 30px;
    }
    .submitContainer {
      width: 100%;
    }
    .responseContainer {
      text-align: center;
      width: 100%;
      .wrong {
        font-size: 22px;
      }
    }
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
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    margin-bottom: 0;
    align-items: flex-end;
    form {
      .inputGroup {
        label {
          font-weight: 600;
          margin-left: 0.25rem;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

const ClockField = styled.div`
  border: 2px solid ${variables.black};
  border-radius: 0.25rem;
  p {
    margin: 0;
    text-align: center;
    font-size: 48px;
    padding: 16px;
    padding-right: 18px;
    letter-spacing: 2px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    span:nth-child(1) {
      text-align: right;
    }
    span:nth-child(3) {
      text-align: left;
    }
  }
`;

export { ClockContainer, ClockField };