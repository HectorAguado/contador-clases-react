import React from 'react';

import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Template = ({ counterValue, logo }) => (
  <StyledWrapper>
    <Header logo={logo} />
    <Body counterValue={counterValue} />
  </StyledWrapper>
);

export default Template;
