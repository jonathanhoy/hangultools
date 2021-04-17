import styled from 'styled-components';
import variables from '../styles/variables'

const Button = styled.button`
  background: ${props => (props.theme === "purple" ? `${variables.primary}` : "white")};
  color: ${props => (props.theme === "purple" ? "white" : `${variables.primary}`)};;
  border: 3px solid ${variables.primary};
  border-radius: 5px;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 20px;
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