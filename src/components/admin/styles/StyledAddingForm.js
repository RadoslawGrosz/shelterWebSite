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
  text-transform: uppercase;
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
`;

export const CloseButton = styled.button`
  position: absolute;

  right: 2vmin;
  top: 2vmin;

  width: 8vmin;
  line-height: 8vmin;
  padding: none;

  border-radius: 50%;
  border: 0.1vmin solid black;
  background-color: #fff;

  font-size: 4vmin;
  text-align: center;

  &::after {
    content: "X";
  }
`;
