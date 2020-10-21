import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;  
  width: 100%;
  min-height: 70vh;
  max-height: 90vh;
  max-width: 1400px;
  background-color: #e0c08c;
  overflow-y: auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  padding: 5vmin;

  @media (orientation: landscape) {
    flex-basis: 50%;
  }
`;

export const InfoSection = styled(StyledSection)`

`;

export const ImageSection = styled(StyledSection)`
  align-items: space-around;
  padding: 3vmin;
`;

export const StyledLabel = styled.label`
  flex-basis: 100%;
  font-size: 4vmin;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2vmin;
`;

export const StyledInput = styled.input`
  flex-basis: 55%;
  font-size: 4vmin;
  letter-spacing: 0.2vmin;
  text-align: center;
`;

export const StyledSubmit = styled(StyledInput)`
  letter-spacing: 0.2vmin;
  padding: 1.5%;
  border: 0.2vmin solid black;
`;

export const StyledFileInput = styled(StyledInput)`
  flex-basis: auto;
  text-align: center;
`;

export const StyledTextarea = styled.textarea`
  flex-basis: 100%;
  height: 50vmin;
  font-size: 4vmin;
  letter-spacing: 0.2vmin;
  padding: 2vmin;
`;

export const ImageContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  height: 40vmin;
  margin: 1vh 0;

  background: ${(props) => `url(${props.src}) no-repeat center center`};
  background-size: cover;
  border: 0.1vmin solid black;

  &:nth-of-type(1) {
    border: 0.5vmin solid #cc23b0;
  }
`;

export const DelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 2vmin;
  top: 2vmin;

  width: 12vmin;
  max-width: 50px;
  height: 12vmin;
  max-height: 50px;
  padding: none;
  margin: .5vmin;

  border-radius: 20%;
  border: 0.1vmin solid black;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

  font-size: 5vmin;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (${({ theme }) => theme.m}) {
    font-size: 3rem;
  }
`;

export const LogoutButton = styled(DelButton)`
  position: fixed;
  z-index: 2;

  left: 2vmin;
  right: auto;
`;

export const CloseButton = styled(DelButton)`
  position: absolute;
  right: 2vmin;
  top: 2vmin;

  &::after {
    content: "x";
  }
`;
