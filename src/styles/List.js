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

const CharacterList = styled(List)`
  width: 100%;
  li {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;
    align-items: center;
    img {
      width: 65px;
    }
    p {
      font-size: 1rem;
      margin: 0;
    }
  }
  @media (max-width: ${variables.sm}) {
    li {
      grid-template-columns: 1fr;
      margin-bottom: 1rem;
      justify-items: center;
    }
  }
`;

const PositionsList = styled(List)`
  li {
    display: flex;
    justify-content: space-between;
    span:first-of-type {
      margin-right: 1.5rem;
    }
  }
`;

export { CalculatorList, ClockList, CharacterList, PositionsList };