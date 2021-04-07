import React from "react"
import styled from "styled-components"

import variables from '../styles/variables';
import { Wrapper } from '../styles/Wrapper';

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Wrapper>
          <h1>Hangul Tools</h1>
        </Wrapper>
      </StyledHeader>
    )
  }
};

const StyledHeader = styled.header`
  background: ${variables.primary};
  box-shadow: ${variables.boxshadow};
  h1 {
    margin: 0;
    padding: 1rem 0;
    font-size: 2.5rem;
    color: ${variables.white};
  }
`;

export default Header;