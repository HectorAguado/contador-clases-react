import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myArr2 = [...myArr, 11, 12];

const [a, b, c, d, ...rest] = myArr2;

const addAppend = arr => arr.map((v, k) => {
  const append = k < arr.length - 1 ? ' ,' : '';
  return `${v}${append}`;
});

// const result1 = myArr.map(v => v * 2);
// const result2 = myArr.filter(v => v % 2 === 0);

// recibiendo un nodo (string, numero, html.. cualquier cosa q un componente pueda renderizar)
const AppLayout = ({ headerContent, introContent }) => (
  <div className="App">
    {headerContent}
    {introContent}
  </div>
);

AppLayout.propTypes = {
  headerContent: PropTypes.node.isRequired,
  introContent: PropTypes.node.isRequired,
};

const AppHeader = ({ data }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">
      {data.title}
    </h1>
  </header>
);

AppHeader.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

const AppIntro = ({ children }) => (
  <div className="App-intro">
    {children.map(item => (
      <p key={item}>
        {item}
      </p>
    ))}
  </div>
);

AppIntro.defaultProps = {
  children: [],
};

AppIntro.propTypes = {
  children: PropTypes.arrayOf([PropTypes.string, PropTypes.number, PropTypes.array]),
};

const App = () => (
  <AppLayout
    headerContent={<AppHeader data={{ logo, title: 'KeepCoding' }} />}
    introContent={(
      <AppIntro>
        {[`${a} ${b} ${c} ${d}${JSON.stringify(rest)}`, addAppend(myArr)]}
      </AppIntro>
)}
  />
);
//  <div className="App">
//  <p>
//       <b>
// Mi Result1:
//       </b>
//       {addAppend(result1)}
//     </p>
//     <p>
//       <b>
// Mi Result2:
//       </b>
//       {addAppend(result2)}
//     </p>
//     <p>
//       <b>
// Desesctructuración - myArr2:
//       </b>
//       {addAppend(myArr2)}
//     </p>
//     <p>
//       <b>
// Desesctructuración - myArr3:
//       </b>
//       {addAppend(rest)}
//     </p>
//   </div>
// );

export default App;
