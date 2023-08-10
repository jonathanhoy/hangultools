import styled from 'styled-components';
import variables from './variables';

const ResourcesFixed = styled.div`
  /* position: fixed; */
  @media (max-width: ${variables.sm}) {
    position: static;
  }
`;

const ResourcesScroll = styled.div`
  /* grid-column: 2 / 3; */
  max-height: 100dvh;
  overflow: scroll;
  @media (max-width: ${variables.sm}) {
    /* grid-column: 1 / 2; */
  }
`;

const TableOfContents = styled.li`
  list-style: none;
  list-style-position: inside;
  margin-bottom: 0.25rem;
  a {
    display: block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: ${variables.black};
    text-decoration: none;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    &:visited {
      color: ${variables.black};
    }
    &:hover {
      color: ${variables.primary900};
      background-color: ${variables.primary100};
      border-color: ${variables.primary900};
    }
  }
  @media (max-width: ${variables.sm}) {
    &:first-of-type {
      margin-top: 0.5rem;
    }
  }
`;

const ResourcesSection = styled.section`
  /* margin-top: 4rem; */
  /* display: grid; */
  /* grid-template-columns: 1fr 2fr; */
  &.numbers-sino {
    /* margin-top: 5.375rem; */
  }
  table {
    width: 100%;
  }
  table.numbers-sino, table.numbers-pure {
    width: 50%;
  }
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    &.numbers-sino {
      margin-top: 2rem;
    }
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
  ResourcesFixed, 
  ResourcesScroll, 
  TableOfContents, 
  ResourcesSection, 
  ResourcesTable, 
  ResourcesTableContainer 
};