import React from 'react';

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
`;

const Template = ({ counterValue, logo }) => (
  <div>
    <Header logo={logo} />
    <Body counterValue={counterValue} />
  </div>
);

export default Template;
