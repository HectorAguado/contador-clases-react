import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex';

const StyledFlex = styled(Flex)`
  border: 1px solid #fabada;
`;

const ButtonGroup = ({ center, ...props }) => (
  <StyledFlex justifyContent={center ? 'center' : 'space-between'} {...props} />
);

ButtonGroup.defaultProps = {
  center: false,
};

ButtonGroup.propTypes = {
  center: PropTypes.bool,
};

// const StyledButtonGroup = styled.div`
//   display: flex;
//   justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
// `;

export default ButtonGroup;
