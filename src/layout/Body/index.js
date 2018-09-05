import React from 'react';

const Body = ({ counterValue }) => (
  <div>
    <p>
      El valor del contador es
      {' '}
      <b>
        {counterValue}
      </b>
    </p>
    {counterValue > -10 && counterValue < 10 ? (
      <div>
        <button type="button">
-1
        </button>
        <button type="button">
+1
        </button>
      </div>
    ) : (
      <div>
        <p>
Has llegado al límite
        </p>
        <div>
          <button type="button">
Reiniciar
          </button>
        </div>
      </div>
    )}
  </div>
);
export default Body;
