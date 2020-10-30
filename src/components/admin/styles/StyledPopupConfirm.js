import styled from 'styled-components';

export const WrapperHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${({ bgc }) => (bgc || 'rgba(0, 0, 0, 0.6)')};
  z-index: 3; 
`;

export const Alert = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-between;

  width: 100%;
  height: 30vh;
  padding: 5%;

  background-color: #000;
  color: white;
  
  @media (orientation: landscape) {
    width: 50vw;
    height: 50vh;
  }
`;

export const StyledH2 = styled.h2`
  text-align: center;
  font-size: 3.5vmin;
  letter-spacing: .2vmin;
`;

export const StyledP = styled.p`
  flex-basis: 100%;
  text-align: center;

  font-size: 3vmin;
  letter-spacing: .1vmin;
`;

export const StyledButton = styled.button`
  align-self: flex-end;
  flex-basis: 30%;
  border: .5vmin solid ;

  font-size: 5vmin;
  letter-spacing: .2vmin;

  text-transform: uppercase;
  cursor: pointer;

  background-color: ${({ confirm }) => (confirm ? 'greenyellow' : 'red')};
`;
