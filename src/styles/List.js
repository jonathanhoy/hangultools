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
    justify-content: space-between;
    span {
      font-size: 1rem;
    }
  }
	li:last-child {
		margin-bottom: 0;
	}
`;

const CalculatorList = styled(List)`
	width: ${props => (props.digits === 'single' ? '55px' : '75px')};
  @media (max-width: ${variables.sm}) {
    width: 55px;
  }
`;

const ClockList = styled(List)`
  width: 75px;
  margin-left: auto;
  margin-right: auto;
`;

export { CalculatorList, ClockList };