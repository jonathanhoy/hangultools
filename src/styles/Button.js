import styled from 'styled-components';
import variables from '../styles/variables'

const Button = styled.button`
  background: ${props => (props.theme === "purple" ? `${variables.primary900}` : "white")};
  color: ${props => (props.theme === "purple" ? "white" : `${variables.primary900}`)};;
  border: 2px solid ${variables.primary900};
  border-radius: 0.25rem;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 20px;
  box-shadow: ${variables.buttonBoxShadow};
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
  @media (max-width: 599px) {
    padding: 10px 5px;
    margin: 5px 0;
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.5rem;
`;

export { Button, ButtonGroup };