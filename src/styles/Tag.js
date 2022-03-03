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
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  margin-top: 0;
  @media (max-width: ${variables.sm}) {
    margin-right: 0;
    width: ${props => props.home ? '100%' : 'auto'};
    text-align: center;
  }
`;

const TagContainer = styled.div`
  padding: 0.25rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export { Tag, TagContainer };