import styled from 'styled-components';
import PropTypes from 'prop-types';
import styledMap from 'styled-map';
// import {default} from '../../layout/index';

const StyledText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${styledMap({
    center: 'center',
    default: 'left',
  })};

  /* text-align: ${({ center }) => (center ? 'center' : 'left')}; */
  color: ${({ theme }) => styledMap('color', {
    white: theme.colors.white,
    danger: theme.colors.danger,
    primary: theme.colors.primary,
    success: theme.colors.success,
    default: theme.colors.black,
  })};

  background: ${styledMap('background', {
    white: '#fff',
    danger: '#ff0000',
    primary: '#0066cc',
    success: 'green',
    black: '#333',
    default: 'transparent',
  })};

  padding: ${styledMap({
    space: '20px 40px',
    default: '5px 10px',
  })};
`;

StyledText.defaultProps = {
  color: 'black',
  background: 'transparent',
};

StyledText.propTypes = {
  color: PropTypes.oneOf(['white', 'danger', 'primary', 'success', 'black']),
  background: PropTypes.oneOf(['white', 'danger', 'primary', 'success', 'black', 'transparent']),
};

export default StyledText;
