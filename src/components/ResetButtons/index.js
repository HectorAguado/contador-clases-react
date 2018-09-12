import React from 'react';

import Text from '../Text';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

const ResetButtons = () => (
  <div>
    {/* <Text center color="#ff0000"> */}
    <Text center color="white" background="danger" space>
      Has llegado al límite
    </Text>
    <ButtonGroup center>
      <Button type="button">
Reiniciar
      </Button>
    </ButtonGroup>
  </div>
);

export default ResetButtons;
