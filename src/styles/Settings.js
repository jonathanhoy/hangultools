import styled from 'styled-components';
import variables from './variables';

const Settings = styled.section`
  height: calc(100dvh - 2rem);
  margin-top: 1rem;
  margin-right: 1rem;
  background: rgba(217, 217, 217, 0.58);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.6px);
  -webkit-backdrop-filter: blur(11.6px);
  border: 1px solid rgba(217, 217, 217, 1);
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
            outline: 1px solid red;
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
    height: auto;
    background: none;
    box-shadow: none;
    margin: 0;
    border-radius: 0.5rem;
    border: 1px solid rgba(217, 217, 217, 1);
    > div {
      /* outline: 1px solid red; */
      display: flex;
      background: ${variables.white};
      border-radius: 0.5rem;
      width: 100%;
      gap: 0.5rem;
    }
    h2 {
      margin-top: 0.25rem;
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
        /* margin-right: 0.25rem; */
      }
      .settings-container:last-of-type:not(:first-of-type) {
        /* margin-left: 0.25rem; */
      }
      .settings-container {
        .settings-list {
          .settings-item {
            .settings-button {
              background: ${variables.grey100};
            }
          }
        }
      }
    }
    .reference {
      border-top: none;
    }
    
    &.resources-settings {
      margin-top: 1rem;
      > div {
        gap: 0;
        flex-direction: column;
        ul {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          li {
            margin: 0;
          }
        }
      }
    }
  }
`;

export default Settings;