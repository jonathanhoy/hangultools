import styled from 'styled-components';
import variables from './variables';

const ResourcesScroll = styled.div`
  max-height: 100dvh;
  overflow: scroll;
  padding-bottom: 3rem;
  h2 {
    padding-bottom: 3rem;
  }
`;

const TableOfContents = styled.li`
  list-style: none;
  list-style-position: inside;
  margin-bottom: 0.25rem;
  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    color: ${variables.black};
    text-decoration: none;
    border-radius: 0.25rem;
    height: 2.25rem;
    &:hover {
      background-color: ${variables.grey200};
    }
    &.active {
      background: ${variables.white};
      box-shadow: ${variables.boxshadow};
    }
  }
  @media (max-width: ${variables.sm}) {
    &:first-of-type {
      margin-top: 0.5rem;
    }
  }
`;

const ResourcesSection = styled.section`
  table {
    width: 100%;
  }
  table.numbers-sino, table.numbers-pure {
    width: 50%;
  }
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;

const ResourcesTable = styled.table`
  border-collapse: collapse;
  thead tr {
    background: ${variables.primary900};
  }
  tbody tr:nth-child(2n) {
    background: ${variables.primary100};
  }
  th {
    color: ${variables.white};
    margin: 0;
    text-align: left;
    width: 50%;
  }
  th, td {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    @media (max-width: ${variables.sm}) {
      padding: 0.5rem 0.75rem;
    }
  }
`;

const ResourcesTableContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export {
  ResourcesScroll, 
  TableOfContents, 
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer 
};