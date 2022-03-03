import styled from "styled-components";
import variables from "./variables";

const Tag = styled.p`
  font-size: 1rem;
  color: ${variables.primary900};
  background: ${variables.primary100};
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
  display: inline-block;
`;

const TagContainer = styled.div`
  padding: 0.5rem 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${variables.md}) {
    grid-template-columns: 1fr;
  }
`;

export { Tag, TagContainer };