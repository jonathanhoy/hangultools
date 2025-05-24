import styled from 'styled-components';
import variables from './variables';

const StyledTableofContents = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: stretch;
  justify-items: stretch;
  margin-bottom: 2rem;
`;

const StyledTableofContentsItem =styled.li`
  a {
    text-decoration: none;
    color: ${variables.black};
    font-size: 1.25rem;
    padding: 1.25rem;
    display: block;
    border-radius: 0.5rem;
    border: 1px solid ${variables.grey200};
    height: 100%;
    &:hover {
      color: ${variables.primary900};
      background: ${variables.primary100};
      border: 1px solid ${variables.primary900};
    }
    &.active {
      color: ${variables.white};
      background: ${variables.primary900};
      border: none;
    }
  }
`;

export { StyledTableofContents, StyledTableofContentsItem };