import styled from 'styled-components';
import variables from './variables';

const ReferenceOuterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: flex-start;
  grid-gap: 5rem;
  padding-bottom: 5rem;
  @media (max-width: ${variables.sm}) {
    grid-gap: 0;
    grid-template-columns: 1fr;
  }
`;

const ReferenceFixed = styled.div`
  position: fixed;
  @media (max-width: ${variables.sm}) {
    position: static;
  }
`;

const ReferenceScroll = styled.div`
  grid-column: 2 / 3;
  @media (max-width: ${variables.sm}) {
    grid-column: 1 / 2;
  }
`;

const TableOfContents = styled.ul`
  list-style: disc;
  list-style-position: inside;
  li {
    a {
      font-size: 1.25rem;
      color: ${variables.black};
      text-decoration: none;
      &:visited {
        color: ${variables.black};
      }
      &:hover {
        color: ${variables.primary};
      }
    }
  }
`;

const ReferenceSection = styled.section`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  &.numbers-sino {
    margin-top: 4.375rem;
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

const ReferenceTable = styled.table`
  border-collapse: collapse;
  thead tr {
    background: ${variables.primary};
  }
  tbody tr:nth-child(2n) {
    background: ${variables.primaryLight};
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

const ReferenceTableContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export { 
  ReferenceOuterContainer,
  ReferenceFixed, 
  ReferenceScroll, 
  TableOfContents, 
  ReferenceSection, 
  ReferenceTable, 
  ReferenceTableContainer 
};