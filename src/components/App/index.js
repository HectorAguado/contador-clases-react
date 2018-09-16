import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';
import ChangeValueForm from '../ChangeValueForm';

const INITIAL_STATE = {
  value: 0,
  inputValue: '',
};
class App extends Component {
  state = INITIAL_STATE;

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.maxValue !== this.props.maxValue) {
      return true;
    }
    if (nextState.value !== this.state.value) {
      return true;
    }
    if (nextState.inputValue !== this.state.inputValue) {
      return true;
    }
    return false;
  };

  updateCounter = event => {
    // console.log(event.target); // <button class="sc-dnqmqq fINBpT" type="button" value="1"> -> saca la etiqueta el botón
    const { value } = event.target; // por destructuring, sacamos value del target
    this.setState(prevState => ({
      value: prevState.value + +value, // + delante de variableString, la convierte en entero. equivale a Number(value) o parseInt(value, 10)
      inputValue: (prevState.value + +value).toString(),
    }));
  };

  updateInputValue = event => {
    const { value } = event.target;
    console.log(value);
    this.setState({
      inputValue: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      value: +prevState.inputValue,
    }));
  };

  resetCounter = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { value, inputValue } = this.state;
    const { maxValue } = this.props;
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        <CounterValue value={value} />
        {value > maxValue * -1 && value < maxValue ? (
          <Fragment>
            <OperationButtons
              updateCounter={this.updateCounter}
              value={value}
              maxValue={maxValue}
            />
            <ChangeValueForm
              inputValue={inputValue}
              updateInputValue={this.updateInputValue}
              onSubmit={this.onSubmit}
            />
          </Fragment>
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

// METODO PARA ACTUALIZAR INPUT, pero al final se arrepintión y lo hicimos diréctamente con el estado
// static getDerivedStateFromProps = (nextProps, prevState) => {
//   return {
//     ...prevState,
//     inputValue: prevState.value,
//   };
// };

// METODOS PARA CONTADOR ACTUALICE SOLO
// componentDidMount = () => {
//   const { maxValue } = this.props;
//   this.interval = setInterval(() => {
//     this.setState(prevState => {
//       if (prevState.value * -1 > maxValue * -1 && prevState.value < maxValue) {
//         return {
//           value: prevState.value + 1,
//         };
//       }
//       return {};
//     });
//   }, 1000);
// };

// componentWillUnmount = () => {
//   if (this.interval) {
//     clearInterval(this.interval);
//   }
// };
