import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background: linear-gradient(#333, #000);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.div`
  background: linear-gradient(#fff, #888);
  max-width: 100%;
  width: 600px;
  padding: 20px;
`;

const StyledText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  background: #0066cc;
  color: #fff;
  border: 0;
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px 15px;
  margin-top: 15px;
`;

const Body = ({ counterValue }) => (
  <StyledWrapper>
    <StyledBox>
      <StyledText center>
        El valor del contador es
        {' '}
        <b>
          {counterValue}
        </b>
      </StyledText>
      {counterValue > -10 && counterValue < 10 ? (
        <StyledButtonGroup>
          <StyledButton type="button">
-1
          </StyledButton>
          <StyledButton type="button">
+1
          </StyledButton>
        </StyledButtonGroup>
      ) : (
        <div>
          <StyledText>
Has llegado al límite
          </StyledText>
          <StyledButtonGroup>
            <StyledButton type="button">
Reiniciar
            </StyledButton>
          </StyledButtonGroup>
        </div>
      )}
    </StyledBox>
  </StyledWrapper>
);
export default Body;
