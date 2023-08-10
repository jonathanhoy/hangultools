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

const ReferenceCard = styled(Card)`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-wrap: wrap;
  flex-direction: column;
  border: none;
  > div {
    width: 100%;
    display: flex;
    gap: 2.5rem;
    /* justify-content: space-between; */
  }
`;

export { Card, ReferenceCard };