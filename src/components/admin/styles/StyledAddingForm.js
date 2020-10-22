import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;  

  min-height: 70vh;
  max-height: 90vh;
  width: 100vw;
  max-width: 1400px;
  padding: 2vmin 0 5vmin;

  background-color: #e0c08c;
  overflow-y: auto;
  z-index: 4;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 5vmin;
`;

export const InfoSection = styled(StyledSection)`
  flex-direction: column;
  max-height: 80vh;
`;

export const ImageSection = styled(StyledSection)`
  position: relative;

  justify-content: space-around;
  align-items: space-around;

  padding: 3vmin;
  padding-bottom: 12vmin;
`;

export const StyledLabel = styled.label`
  flex-basis: 100%;

  font-size: 4vmin;
  letter-spacing: 0.2vmin;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledInput = styled.input`
  width: 50%;
  margin-bottom: 3vmin;

  font-size: 4vmin;
  line-height: 6vmin;
  letter-spacing: 0.2vmin;
  text-align: center;
`;

export const StyledSubmit = styled(StyledInput)`
  position: absolute;

  bottom: 1vmin;
  margin-bottom: 0;
  padding: 1.5%;
  border: 0.2vmin solid black;

  letter-spacing: 0.2vmin;
`;

export const StyledFileInput = styled(StyledInput)`
  width: 100%;
  flex-basis: auto;
  text-align: center;
`;

export const StyledTextarea = styled.textarea`
  width: 85%;
  height: 50vmin;
  padding: 2vmin;

  font-size: 4vmin;
  letter-spacing: 0.2vmin;
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 45vmin;
  height: 45vmin;
  margin: 1vh 0;

  background: ${(props) => `url(${props.src}) no-repeat center center`};
  background-size: cover;
  border: 0.1vmin solid black;

  &:nth-of-type(1) {
    border: 0.5vmin solid #cc23b0;
  }
`;

export const DelButton = styled.button`
  position: absolute;
  right: 2vmin;
  top: 2vmin;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 12vmin;
  max-width: 50px;
  height: 12vmin;
  max-height: 50px;
  padding: none;
  margin: .5vmin;
  border: 0.1vmin solid black;

  border-radius: 20%;
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
