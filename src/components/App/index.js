import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';

const INITIAL_STATE = {
  value: 0,
};
class App extends Component {
  state = INITIAL_STATE;

  updateCounter = event => {
    console.log(event.target); // <button class="sc-dnqmqq fINBpT" type="button" value="1"> -> saca la etiqueta el botón
    const { value } = event.target; // por destructuring, sacamos value del target
    this.setState(prevState => ({
      value: prevState.value + +value, // + delante de variableString, la convierte en entero. equivale a Number(value) o parseInt(value, 10)
    }));
  };

  resetCounter = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { value } = this.state;
    const { maxValue } = this.props;
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        <CounterValue value={value} />
        {value > maxValue * -1 && value < maxValue ? (
          <OperationButtons updateCounter={this.updateCounter} />
        ) : (
          <ResetButtons resetCounter={this.resetCounter} />
        )}
      </Template>
    );
  }
}

App.propTypes = {
  maxValue: PropTypes.number,
};

App.defaultProps = {
  maxValue: 10,
};

export default App;
