import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px; /* vertical horizontal */
  align-items: center;
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const Header = ({ logo }) => (
  <StyledHeader>
    <StyledImg src={logo} alt="" />
    <StyledH1>
Ejemplo de contador Keepcoding
    </StyledH1>
  </StyledHeader>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
