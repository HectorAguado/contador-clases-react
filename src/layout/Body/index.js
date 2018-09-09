import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Wrapper from './Wrapper';

const Body = ({ children }) => (
  <Wrapper>
    <Box>
      {children}
    </Box>
  </Wrapper>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
