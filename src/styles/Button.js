import styled from 'styled-components';
import variables from '../styles/variables';
import rightArrow from '../assets/key-right-arrow.svg';

const Button = styled.button`
  background: ${props => (props.theme === "purple" ? `${variables.primary900}` : "white")};
  color: ${props => (props.theme === "purple" ? "white" : `${variables.primary900}`)};;
  border: 2px solid ${variables.primary900};
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
    position: relative;
    padding: 0.5rem;
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -2.5rem;
      width: 1.5rem;
      height: 1.5rem;
      background-image: url(${rightArrow});
      background-size: contain;
      transition: all 0.2s;
      @media (max-width: ${variables.md}) {
        display: none;
      }
    }
  }

  &:active {
    box-shadow: none;
    transform: translateY(4px);
    &.next {
      &:after {
        transform: translate(-50%, -4px);
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.5rem;
`;

export { Button, ButtonGroup };