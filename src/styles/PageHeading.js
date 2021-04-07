import styled from 'styled-components';
import variables from '../styles/variables';

const PageHeading = styled.h2`
  font-size: 2rem;
  color: ${variables.black};
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

const PageBody = styled.p`
  font-size: 1.5rem;
  color: ${variables.black};
  margin-top: 0;
`;

export { PageHeading, PageBody };