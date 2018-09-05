import React from 'react';
import Header from '../Header';
import Body from '../Body';

const Template = ({ counterValue, logo }) => (
  <div>
    <Header logo={logo} />
    <Body counterValue={counterValue} />
  </div>
);

export default Template;
