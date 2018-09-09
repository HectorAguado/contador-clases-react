import React from 'react';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';

const value = -10;

const App = () => (
  <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
    <CounterValue value={value} />
    {value > -10 && value < 10 ? <OperationButtons /> : <ResetButtons />}
  </Template>
);

export default App;
