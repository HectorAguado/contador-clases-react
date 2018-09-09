import styled from 'styled-components';

const StyledText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;
export default StyledText;
