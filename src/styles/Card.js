import styled from 'styled-components';
import variables from '../styles/variables';

const Card = styled.div`
  background: ${variables.grey100};
  border-radius: 0.25rem;
  border: 1px solid ${variables.grey400};
  padding: 1rem;
  @media (max-width: ${variables.sm}) {
    padding: 0.5rem;
  }
`;

const CardHeading = styled.h2`
  text-transform: uppercase;
  font-style: italic;
  font-size: 0.75rem;
  color: ${variables.grey900};
  margin: 0 0 0.5rem 0;
  @media (max-width: ${variables.sm}) {
    margin: 0;
  }
`;

const ReferenceCard = styled(Card)`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-wrap: wrap;
  flex-direction: column;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export { Card, CardHeading, ReferenceCard };