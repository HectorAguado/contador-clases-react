import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
`;

export default StyledButtonGroup;
