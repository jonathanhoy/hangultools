import styled from 'styled-components';
import variables from './variables';

const Settings = styled.section`
  .settings-container {
    &:first-of-type {
      margin-bottom: 1rem;
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
          border-radius: 0.25rem;
          color: ${variables.black};
          position: relative;
          z-index: 10;
          span {
            position: relative;
            z-index: -1;
          }
          &[data-active="true"] {
            background: ${variables.primary};
            color: ${variables.white};
          }
        }
      }
    }
  }
`;

export default Settings;