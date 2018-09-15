import React, { Component } from 'react';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';
class App extends Component {
  state = {
    value: -10,
  };

  resetCounter = () => {
    this.setState({
      value: 0,
    });
  };

  addOne = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  removeOne = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        <CounterValue value={value} />
        {value > -10 && value < 10 ? (
          <OperationButtons addOne={this.addOne} removeOne={this.removeOne} />
        ) : (
          <ResetButtons resetCounter={this.resetCounter} />
        )}
      </Template>
    );
  }
}

export default App;
