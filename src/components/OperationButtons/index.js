import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const OperationButtons = ({ updateCounter }) => (
  <ButtonGroup>
    <Button type="button" onClick={updateCounter} value={-5}>
      -5
    </Button>
    <Button type="button" onClick={updateCounter} value={-1}>
      -1
    </Button>
    <Button type="button" onClick={updateCounter} value={1}>
      +1
    </Button>
    <Button type="button" onClick={updateCounter} value={5}>
      +5
    </Button>
  </ButtonGroup>
);

OperationButtons.propTypes = {
  updateCounter: PropTypes.func.isRequired,
};

export default OperationButtons;
