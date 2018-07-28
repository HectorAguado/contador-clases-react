import React from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  name: 'José Manuel',
  surname: 'Lucas Muñoz',
  address: 'C\\ de la Fantasía, 7, Pilar de la Muela (Mordor)',
  phone: '666666666',
};

const { name, surname, address, phone } = user;
const toPrint = `
  Nombre: ${name};
  Apellidos: ${surname};
  Dirección: ${address};
  Teléfono: ${phone};
`;

const myArr = [1,2,3,4,5,6,7,8,9,10];

const myArr2 = [...myArr, 11, 12];

const [a, b, c, d, ...rest] = myArr2

const addAppend = arr =>
    arr.map((v, k) => {
      const append = k < arr.length - 1 ? ` ,` : ``;
      return `${v}${append}`;
    });

const result1 = myArr.map(v => v * 2);
const result2 = myArr.filter(v => v % 2 === 0);


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        {toPrint}
      </h1>
    </header>
    <div className="App-intro">
      <p className="App-intro">
        To get started, edit
        <code>
           src/App.js
        </code>
        and save to reload.
        De las glorias deportivas que campean por españa
        va el Madrid con su bandera
      </p>
      <p>
        <b>
          Mi Array:
        </b>
        {addAppend(myArr)}
      </p>
      <p>
        <b>
          Mi Result1:
        </b>
        {addAppend(result1)}
      </p>
      <p>
        <b>
          Mi Result2:
        </b>
        {addAppend(result2)}
      </p>
      <p>
        <b>
          Desesctructuración - myArr2:
        </b>
        {addAppend(myArr2)}
      </p>
      <p>
        <b>
          Desesctructuración - myArr3:
        </b>
        {addAppend(rest)}
      </p>
    </div>
  </div>
);

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{toPrint}
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          De las glorias deportivas que campean por españa
          va el Madrid con su bandera
        </p>
        <div className="App-intro">
          <p><b>Mi Array: </b> {addAppend(myArr)}</p>
          <p><b>Mi Result1: </b>{addAppend(result1)} </p>
          <p><b>Mi Result2: </b>{addAppend(result2)} </p>
          <p><b>Desesctructuración - myArr2: </b>{addAppend(myArr2)} </p>
          <p><b>Desesctructuración - myArr3: </b>{addAppend(rest)} </p>
        </div>
      </div>
    );
  }
}
*/
export default App;
