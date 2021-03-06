import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { rgba } from 'polished';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px; /* vertical horizontal */
  align-items: center;
  border-bottom: 1px solid #999;
  box-shadow: 0 1px solid ${rgba('#fff', 0.7)};
  position: relative;
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const Header = ({ logo, theme }) => (
  <StyledHeader>
    <StyledImg src={logo} alt="" />
    <StyledH1>
      {theme.colors.success}
      {' '}
Ejemplo de contador Keepcoding
    </StyledH1>
  </StyledHeader>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default withTheme(Header);
