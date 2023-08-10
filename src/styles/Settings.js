import styled from 'styled-components';
import variables from './variables';

const Settings = styled.section`
  background: ${variables.grey100};
  border-left: 0.5px solid ${variables.grey400};
  height: 100dvh;
  h2 {
    font-size: 1rem;
    color: ${variables.grey900};
  }
  .settings-container {
    margin-top: 2rem;
    .settings-heading {
    }
    .settings-list {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      .settings-item {
        .settings-button {
          text-align: left;
          width: 100%;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          background: none;
          border: none;
          border-radius: ${variables.brsmall};
          color: ${variables.black};
          position: relative;
          z-index: 10;
          cursor: pointer;
          span {
            position: relative;
            z-index: -1;
          }
          &:hover {
            background: ${variables.grey200};
          }
          &[data-active="true"] {
            background: ${variables.primary900};
            color: ${variables.white};
            box-shadow: ${variables.boxshadow};
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