import React, { Component } from 'react';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';
class App extends Component {
  state = {
    value: -10,
  };

  render() {
    const { value } = this.state;
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        <CounterValue value={value} />
        {value > -10 && value < 10 ? <OperationButtons /> : <ResetButtons />}
      </Template>
    );
  }
}

export default App;
