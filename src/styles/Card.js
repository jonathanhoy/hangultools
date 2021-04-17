import styled from 'styled-components';
import variables from '../styles/variables';

const Card = styled.div`
  background: ${variables.grey};
  border-radius: 0.25rem;
  box-shadow: ${variables.boxshadow};
  padding: 1rem;
  @media (max-width: ${variables.sm}) {
    padding: 0.5rem;
  }
`;

const CardHeading = styled.h2`
  text-transform: uppercase;
  font-style: italic;
  font-size: 0.75rem;
  color: ${variables.darkgrey};
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
  @media (max-width: ${variables.sm}) {
    > div {
      /* width: 50%; */
      /* margin: 0 auto; */

    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  margin-top: 0.5rem;
  li {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1rem;
    }
  }
	li:last-child {
		margin-bottom: 0;
	}
`;

export { Card, CardHeading, ReferenceCard };