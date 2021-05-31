import styled from 'styled-components';
import { WrapperHover } from './StyledPopupConfirm';
import { StyledH2 } from '../../home/styles/StyledMainSection';

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  min-height: 60vh;
  max-height: 90vh;
  width: 100vw;
  max-width: 800px;

  background-color: #e0c08c;
  z-index: 99;
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  min-height: 60vh;
  max-height: 90vh;
  width: 100vw;
  max-width: 800px;
  padding: 2vmin 0;

  background-color: #e0c08c;
  overflow-y: auto;
  z-index: 4;

  @media (${({ theme }) => theme.m}) {
    padding: 3rem 0;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const InfoSection = styled(StyledSection)`
  flex-direction: column;
`;

export const ImageSection = styled(StyledSection)`
  padding: 3vmin;
`;

export const StyledLabel = styled.label`
  padding: 3vmin 2vmin;

  font-size: 4vmin;
  letter-spacing: 0.2vmin;
  text-align: center;
  text-transform: uppercase;

  background-color: #fff;

  @media (${({ theme }) => theme.m}) {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
`;

export const FileUploadButton = styled(StyledLabel)`
  border: 0.5vmin solid black;
  cursor: pointer;
  transition: 0.3s;

  & strong {
    margin-left: 2vmin;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  @media (${({ theme }) => theme.m}) {
    width: 50rem;
  }
`;

export const StyledInput = styled.input`
  width: 50vmin;
  margin-bottom: 3vmin;

  font-size: 4vmin;
  line-height: 6vmin;
  letter-spacing: 0.2vmin;
  text-align: center;

  @media (${({ theme }) => theme.m}) {
    font-size: 2rem;
    width: 50rem;
  }
`;

export const StyledSubmit = styled(StyledInput)`
  width: auto;
  bottom: 1vmin;
  margin-bottom: 0;
  margin-top: 8vmin;
  padding: 2vmin 10vmin;
  border: 0.5vmin solid black;
  align-self: flex-end;

  color: black;
  background-color: white;

  font-size: 5vmin;
  letter-spacing: 0.2vmin;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;

  @media (hover: hover) {
    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media (${({ theme }) => theme.m}) {
    font-size: 2rem;
    padding: 1rem 5rem;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 2rem;
    line-height: 5rem;
    padding: 0 2rem;
  }
`;

export const StyledFileInput = styled(StyledInput)`
  display: none;
`;

export const StyledTextarea = styled.textarea`
  width: 85vmin;
  height: 50vmin;
  padding: 2vmin;

  font-size: 3.5vmin;
  letter-spacing: 0.2vmin;
  word-wrap: break-word;

  @media (${({ theme }) => theme.m}) {
    font-size: 1.5rem;
    width: 50rem;
    height: 30rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;

  width: 100%;
  padding: 2vmin 0;
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 45vmin;
  height: 45vmin;
  margin: 1vh 0;

  background: ${(props) => `url(${props.src}) no-repeat center center`};
  background-size: cover;
  border: 0.1vmin solid black;

  border: ${({ isMain }) =>
    isMain ? '0.5vmin solid #cc23b0' : 'border: 0.1vmin solid black'};

  @media (${({ theme }) => theme.m}) {
    width: 20rem;
    height: 20rem;
  }
`;

export const DelButton = styled.button`
  position: absolute;
  right: 7vmin;
  top: 2vmin;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 12vmin;
  max-width: 50px;
  height: 12vmin;
  max-height: 50px;
  padding: none;
  margin: 0.5vmin;
  border: 0.1vmin solid black;

  border-radius: 20%;
  background-color: #fff;
  background-color: ${({ isVisible }) =>
    isVisible === true ? 'black' : 'white'};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

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

export const CloseButton = styled(DelButton)`
  width: 8vmin;
  height: 8vmin;

  z-index: 6;

  @media (${({ theme }) => theme.m}) {
    width: 3.2rem;
    height: 3.2rem;

    top: 1rem;
    left: 1rem;

    font-size: 2rem;
  }
`;

export const UploadingMessage = styled(WrapperHover)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 7;
`;

export const Info = styled(StyledH2)`
  color: white;
`;
