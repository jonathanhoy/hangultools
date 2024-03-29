import styled from 'styled-components';
import variables from '../styles/variables';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    width: 90%;
    @media (max-width: ${variables.sm}) {
      /* padding-top: 7.1875rem; */
    }
`;

const ComponentWrapper = styled.div`
  width: 300px;
  margin: ${props => (props.margin === 'auto' ? '0 auto' : '0')};
  @media (max-width: ${variables.sm}) {
    width: 100%;
  }
`;

export { Wrapper, ComponentWrapper };