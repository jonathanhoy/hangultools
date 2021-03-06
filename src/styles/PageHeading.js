import styled from 'styled-components';
import variables from '../styles/variables';

const PageHeading = styled.h2`
  font-size: 2rem;
  color: ${variables.black};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const PageSubHeading = styled.h3`
  font-size: 1.75rem;
  color: ${variables.black};
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const PageSubSectionHeading = styled.h4`
  font-size: 1.5rem;
  color: ${variables.black};
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const PageBody = styled.p`
  max-width: 35rem;
  font-size: 1rem;
  color: ${variables.black};
`;

export { PageHeading, PageSubHeading, PageSubSectionHeading, PageBody };