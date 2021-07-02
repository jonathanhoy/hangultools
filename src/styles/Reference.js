import styled from 'styled-components';
import variables from './variables';

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
  margin-top: 3rem;
  &.numbers {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ReferenceTable = styled.table`
  border-collapse: collapse;
  thead tr {
    background: ${variables.primary};
  }
  tbody tr:nth-child(2n) {
    background: ${variables.tableAlt};
  }
  th {
    font-size: 1rem;
    font-weight: 400;
    color: ${variables.white};
    margin: 0;
    padding: 0.5rem 1.5rem;
  }
  td {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
`;

const ReferenceTableContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export { TableOfContents, ReferenceSection, ReferenceTable, ReferenceTableContainer };