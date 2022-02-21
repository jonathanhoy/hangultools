import styled from "styled-components";
import variables from "./variables";

const Tag = styled.p`
  font-size: 1rem;
  color: ${variables.primary900};
  background: ${variables.primary100};
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  margin-bottom: 0;
  margin-top: 0;
  @media (max-width: ${variables.md}) {
    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }
  }
`;

const TagContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

export { Tag, TagContainer };