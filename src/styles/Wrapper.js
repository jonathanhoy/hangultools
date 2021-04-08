import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    width: 95%;
`;

const ComponentWrapper = styled.div`
  width: 200px;
  margin: ${props => (props.margin === 'auto' ? '0 auto' : '0')};
`;

export { Wrapper, ComponentWrapper };