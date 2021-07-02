import styled from 'styled-components';
import variables from '../styles/variables';

const PageHeading = styled.h2`
  font-size: 2rem;
  color: ${variables.black};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PageSubHeading = styled.h3`
  font-size: 1.75rem;
  color: ${variables.black};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PageBody = styled.p`
  font-size: 1rem;
  color: ${variables.black};
  margin-top: 0;
`;

export { PageHeading, PageSubHeading, PageBody };