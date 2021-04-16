import styled from 'styled-components';
import variables from './variables';

const Settings = styled.section`
  .settings-container {
    &:first-of-type:not(:last-of-type) {
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
  @media (max-width: ${variables.sm}) {
    display: flex;
    padding: 0;
    > div {
      display: flex;
    }
    div {
      flex: 1 0 0;
      padding: 0.5rem;
      .settings-container,
      .settings-container:first-of-type:not(:last-of-type) {
        padding: 0;
        margin: 0;
      }
      .settings-container:first-of-type:not(:last-of-type) {
        margin-right: 0.25rem;
      }
      .settings-container:last-of-type:not(:first-of-type) {
        margin-left: 0.25rem;
      }
    }
  }
`;

export default Settings;