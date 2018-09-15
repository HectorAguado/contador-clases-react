import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const OperationButtons = ({ addOne, removeOne }) => (
  <ButtonGroup>
    <Button type="button" onClick={removeOne}>
      -1
    </Button>
    <Button type="button" onClick={addOne}>
      +1
    </Button>
  </ButtonGroup>
);

OperationButtons.propTypes = {
  addOne: PropTypes.func.isRequired,
  removeOne: PropTypes.func.isRequired,
};

export default OperationButtons;
