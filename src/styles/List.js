import styled from 'styled-components';
import variables from '../styles/variables';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  margin-top: 0.5rem;
  li {
    margin-bottom: 0.5rem;
    display: flex;
    span {
      font-size: 1rem;
      &:first-of-type {
        margin-right: 1rem;
      }
    }
  }
	li:last-child {
		margin-bottom: 0;
	}
  @media (max-width: ${variables.sm}) {
    li {
      span {
      &:first-of-type {
        margin-right: 0.25rem;
      }
    }
    }
  }
`;

const CalculatorList = styled(List)`

`;

const ClockList = styled(List)`

`;

export { CalculatorList, ClockList };