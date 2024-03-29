import styled from 'styled-components';
import variables from '../styles/variables';
import rightArrow from '../assets/keys/key-right-arrow.png';

const Button = styled.button`
  background: ${props => (props.theme === "purple" ? `${variables.primary900}` : "white")};
  color: ${props => (props.theme === "purple" ? "white" : `${variables.primary900}`)};;
  border: 1.5px solid ${variables.primary900};
  border-radius: 0.25rem;
  width: 100%;
  margin: 10px 0;
  padding: 0.5rem 0.25rem;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 20px;
  box-shadow: ${variables.buttonBoxShadow};
  @media (max-width: 599px) {
    padding: 10px 5px;
    margin: 5px 0;
  }

  &.next {
    padding: 0.5rem;
  }

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0.5rem;
  &:after {
    content: '';
    position: absolute;
    bottom: 3.5rem;
    right: -2.5rem;
    width: 2rem;
    height: 1.5rem;
    background-image: url(${rightArrow});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.2s;
    @media (max-width: ${variables.md}) {
      display: none;
    }
  }
`;

export { Button, ButtonGroup };