import styled from 'styled-components';
import variables from './variables';

const Settings = styled.section`
  background: ${variables.grey};
  border-radius: 0.25rem;
  box-shadow: ${variables.boxshadow};
  padding: 1rem;
  .settings-heading {
    text-transform: uppercase;
    font-style: italic;
    font-size: 0.75rem;
    color: ${variables.darkgrey};
    margin: 0.5rem 0;
  }
  .settings-list {
    margin: 0;
    .settings-item {
      text-align: center;
      .settings-button {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        margin: 0.5rem 0 0 0;
        background: ${variables.lightgrey};
        border: none;
        font-weight: 700;
        border-radius: 0.25rem;
        color: ${variables.black};
        &[data-active="true"] {
          background: ${variables.primary};
          color: ${variables.white};
        }
      }
      &:last-of-type {
        .settings-button {
          margin-bottom: 0;
        }
      }
    }
  }
  div:first-of-type {
    .settings-heading {
      margin-top: 0;
    }
  }
  div:last-of-type {
    .settings-heading {
      margin-top: 1rem;
    }
  }
`;


// const Settings = styled.section`
//   /* position: relative;
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-start;
//   margin-top: 10px; */
//   .settings-list {
//     margin: 0;
//     background: ${variables.grey};
//     width: 175px;
//     border-radius: 5px;
//     text-align: center;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     li {
//       list-style: none;
//       /* margin-top: 5px; */
//     }
//     .option,
//     .number {
//       grid-column: span 2;
//     }
//     @media (max-width: 599px) {
//       width: 100%;
//       grid-column-gap: 5px;
//       margin-top: 0;
//       .number {
//         grid-column: span 1;
//       }
//     }
//   }
//   label {
//     position: relative;
//     padding: 5px;
//     width: 100%;
//     display: inline-block;
//   }
//   p {
//     display: inline-block;
//     font-weight: 600;
//     margin: 0;
//     position: relative;
//     z-index: 10;
//   }
//   p.simpleNumbers {
//     color: ${props => (props.simpleNumbersToggle === true ? 'white' : 'black')}
//   }
//   p.multipleChoice {
//     color: ${props => (props.multipleChoiceToggle === true ? 'white' : 'black')}
//   }
//   p.sino {
//     color: ${props => (props.sinoToggle === true ? 'white' : 'black')}
//   }
//   p.pure {
//     color: ${props => (props.pureToggle === true ? 'white' : 'black')}
//   }
//   @media (max-width: 599px) {
//     grid-row: 2 / 3;
//     grid-column: 1 / 2;
//     width: 100%;
//     margin-top: 0;
//     label {
//       width: 100%;
//       padding: 10px;
//     }
//     .settings-list-item {
//       width: 100%;
//     }
//     .reference-container {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       grid-gap: 5px;
//     }
//   }
//   .mobileBlock {
//     display: inline-block;
//   }
//   .mobileHide {
//     display: none;
//   }
// `;

export default Settings;