import styled from 'styled-components';
import variables from './variables';

const Settings = styled.section`
  background: ${variables.grey100};
  border-left: 0.5px solid ${variables.grey400};
  height: 100dvh;
  box-shadow: rgba(0, 0, 0, 0.06) 0px -2px 4px 0px inset;
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
    height: auto;
    background: none;
    border-left: none;
    box-shadow: none;
    > div {
      display: flex;
      background: ${variables.white};
      border-radius: 0.25rem;
      width: 100%;
      gap: 1rem;
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
    }
    .reference {
      border-top: none;
    }
    
    &.resources-settings {
      margin-top: 1rem;
      > div {
        /* background: red; */
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