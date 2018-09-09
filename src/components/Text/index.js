import styled from 'styled-components';

const StyledText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  color: ${({ color }) => color || '#333'};
`;
export default StyledText;
