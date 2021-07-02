import styled from 'styled-components';
import variables from './variables';

const ReferenceOuterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: flex-start;
  grid-gap: 5rem;
  padding-bottom: 5rem;
`;

const ReferenceFixed = styled.div`
  position: fixed;
`;

const ReferenceScroll = styled.div`
  grid-column: 2 / 3;
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
  /* justify-items: end; */
  &.numbers-sino {
    margin-top: 4.375rem;
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
    text-align: left;
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

export { 
  ReferenceOuterContainer,
  ReferenceFixed, 
  ReferenceScroll, 
  TableOfContents, 
  ReferenceSection, 
  ReferenceTable, 
  ReferenceTableContainer 
};