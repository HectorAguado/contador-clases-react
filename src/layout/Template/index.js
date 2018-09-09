import React from 'react';
import PropTypes from 'prop-types';

import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Template = ({ children, logo }) => (
  <StyledWrapper>
    <Header logo={logo} />
    <Body>
      {children}
    </Body>
  </StyledWrapper>
);

console.log(Header.propTypes);
console.log(Body.propTypes);
// en el inspector de crhome, vemos que logo es un objeto.
// Al pasarselo a <Header logo={logo} /> ya se crea el objeto con la info
// En lugar de `logo: PropTypes.string.isRequired,`, podemos usar ...Header.propTypes.

// // Nodo => String, elementos DOM u otros componentes (algo renderizable),
// Template.propTypes = {
//   children: PropTypes.node.isRequired,
//   logo: PropTypes.string.isRequired,
// };

Template.propTypes = {
  ...Header.propTypes,
  ...Body.propTypes,
};

export default Template;
