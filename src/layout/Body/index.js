import React from 'react';

import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Text from '../../components/Text';

import Box from './Box';
import Wrapper from './Wrapper';

const Body = ({ counterValue }) => (
  <Wrapper>
    <Box>
      <Text center>
        El valor del contador es
        {' '}
        <b>
          {counterValue}
        </b>
      </Text>
      {counterValue > -10 && counterValue < 10 ? (
        <ButtonGroup>
          <Button type="button">
-1
          </Button>
          <Button type="button">
+1
          </Button>
        </ButtonGroup>
      ) : (
        <div>
          <Text>
Has llegado al límite
          </Text>
          <ButtonGroup>
            <Button type="button">
Reiniciar
            </Button>
          </ButtonGroup>
        </div>
      )}
    </Box>
  </Wrapper>
);
export default Body;
