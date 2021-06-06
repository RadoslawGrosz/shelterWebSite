import styled, { keyframes } from 'styled-components';
import { Button } from '@material-ui/core';
import { mainColorDark, mainColorLight } from '../../theme/Theme';

const rotateSpinner = keyframes`
	0% {
		transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	}
	50% {
		transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
	}
	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
	}
`;

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;

  width: 100vw;
  min-height: 40vh;
  padding-bottom: 10vmin;

  transition: height 0.66s ease-out;
  z-index: 11;
  background-color: #fff;
`;

export const StyledH1 = styled.h1`
  flex-basis: 100%;

  font-size: 7vmin;
  line-height: 18vh;
  letter-spacing: 0.8vmin;
  text-align: center;
  text-transform: uppercase;

  @media (${({ theme }) => theme.l}) {
    font-size: 4.5rem;
  }
`;

export const StyledArticle = styled.article`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  min-height: 40vh;
  padding: 2vmin, 2vmin, 2vmin, 2vmin;

  overflow: hidden;
  cursor: default;

  @media (orientation: landscape) {
    width: 50%;
    min-height: 80vh;
    max-height: 80vh;
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    min-height: 50vh;
  }
`;

export const StyledArticleScroll = styled.article`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -6.5vmin;

  padding: 0vmin 5vmin 5vmin 5vmin;
  padding-right: 10vmin;

  overflow-y: scroll;
`;

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;

  max-width: 1600px;
  margin-bottom: 3vh;
  /* overflow: hidden; */

  color: white;
  background-color: #cfa068;

  &:nth-of-type(even) {
    background-color: #cf7e3f;
    & ${StyledArticle} {
      @media (orientation: landscape) {
        order: -1;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  overflow: hidden;
  flex-basis: 100%;
  height: 40vh;

  cursor: pointer;

  @media (orientation: landscape) {
    flex-basis: 50%;
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(8px);
    background: ${({ src }) => `url(${src.small}) no-repeat center`};
    background-size: cover;
    background-clip: border-box;

    @media (${({ theme }) => theme.m}) {
      background: ${({ src }) => `url(${src.medium}) no-repeat center`};
      background-size: cover;
      background-clip: border-box;
    }

    @media (${({ theme }) => theme.l}) {
      background: ${({ src }) => `url(${src.big}) no-repeat center`};
      background-size: cover;
      background-clip: border-box;
    }
  }
`;

export const ImageHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 15%;

  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  filter: blur(0);

  opacity: 0;
  transition: 0.5s;

  & h2 {
    font-size: 3vmin;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 40vh;
  max-width: 100%;
  max-height: 50vh;

  overflow: hidden;

  cursor: pointer;
  transition: 0.5s;

  @media (orientation: landscape) {
    min-height: 80vh;
    max-height: 80vh;
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    min-height: 50vh;
  }

  @media (hover: hover) {
    &:hover ${ImageHover} {
      opacity: 1;
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  background: ${({ src }) => `url(${src.small}) no-repeat center center`};
  background-size: cover;
  box-shadow: 0 0 10vmin rgba(0, 0, 0, 0.8) inset;

  @media (${({ theme }) => theme.m}) {
    background: ${({ src }) => `url(${src.medium}) no-repeat center center`};
    background-size: cover;
  }

  @media (${({ theme }) => theme.l}) {
    background: ${({ src }) => `url(${src.big}) no-repeat center center`};
    background-size: cover;
  }
`;

export const StyledH2 = styled.h2`
  flex-basis: 100%;

  font-size: 4vmin;
  line-height: 10vmin;
  text-align: center;
  letter-spacing: 0.3vmin;

  @media (${({ theme }) => theme.m}) {
    font-size: 2rem;
  }
`;

export const StyledP = styled.p`
  font-size: 3vmin;
  letter-spacing: 0.2vh;
  word-wrap: break-word;
  text-overflow: ellipsis;

  @media (${({ theme }) => theme.m}) and (orientation: portrait) {
    font-size: 2rem;
  }

  @media (orientation: landscape) {
    padding: 0 1vw 0 1vw;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 1.6rem;
  }
`;

export const Spinner = styled.div`
  width: 10%;
  padding-bottom: 10%;
  margin: 10vmin 0 10vmin 0;

  background-color: #f05f40;

  animation: ${rotateSpinner} 1.2s infinite ease-in-out;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;

  max-width: 1200px;
  height: 50vh;
  margin-top: 3vh;

  overflow: hidden;
  order: 2;

  @media (orientation: landscape) {
    height: 80vh;
  }
`;

export const DivAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  transform: translateY(-50%);

  width: 90%;
  padding: 2.5em 2.5em 3.5em;
  border-radius: 1rem;

  z-index: 10;
  background-color: #d29f68;
  color: white;

  @media (${({ theme }) => theme.l}) {
    width: 80%;
    padding: 6rem;
    font-size: 1.6rem;
    line-height: 3rem;
  }

  @media (${({ theme }) => theme.xl}) {
    width: 70%;
    padding-bottom: 9rem;
    font-size: 2rem;
    line-height: 4rem;
  }

  @media (${({ theme }) => theme.xxl}) {
    width: 60%;
    padding-left: 10em;
    padding-right: 10em;
  }
`;

export const H1About = styled.h1`
  flex-basis: 100%;

  text-align: center;
  font-size: 2.5em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
`;

export const PAbout = styled.p`
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 0.05em;
  line-height: 1.3em;

  @media (${({ theme }) => theme.l}) {
    font-size: 1em;
  }

  @media (${({ theme }) => theme.xxl}) {
    line-height: 2em;
  }
`;

export const WideWrapper = styled.section`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
  /* left: calc(-50vw + 50%); */
  margin-top: -10em;

  @media (${({ theme }) => theme.m}) {
    margin-top: -10em;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* margin-top: -14em; */

  @media (orientation: landscape) {
    flex-direction: row-reverse;
    align-items: center;
    padding: 5vw;
  }

  /* @media (${({ theme }) => theme.m}) {
    margin-top: -10em;
  } */

  @media (${({ theme }) => theme.xxl}) {
    width: 60%;
    padding: 0;
  }
`;

export const EventsWrapper = styled(DivAbout)`
  align-items: flex-start;

  padding-top: 0;
  padding-bottom: 0;

  background-color: transparent;
  color: black;
  transform: none;

  @media (orientation: landscape) {
    align-items: flex-start;
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    padding: 0 1rem 4rem;
    line-height: 1.5rem;
  }
`;

export const EventWrapperTitle = styled(H1About)`
  letter-spacing: 0.1em;

  @media (orientation: landscape) {
    /* margin: 0; */
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    font-size: 3rem;
    line-height: 7rem;
  }
`;

export const TextWrapper = styled.div``;

export const IconWrapper = styled.div`
  font-size: 6vmin;
  padding-right: 5%;
  color: #d29f68;

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    font-size: 3.5rem;
  }
`;

export const EventWrapper = styled.div`
  display: flex;

  width: 100%;
  margin-bottom: 2vmin;

  cursor: ${(props) => (props.allView ? 'pointer' : 'default')};
  transition: 0.3s;

  &:hover {
    transform: ${(props) => (props.allView ? 'scale(1.1)' : 'scale(1)')};
  }
`;

export const EventName = styled(PAbout)`
  text-align: left;
  margin-bottom: 2vmin;
`;

export const EventDescription = styled(EventName)``;

export const EventsButton = styled(Button)`
  font-size: 1em;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  border: none;
  border-radius: 2rem;
  padding: 0.7em 1.5em;

  background-color: ${mainColorLight};
  color: white;

  transition: 0.3s;

  &:hover {
    background-color: ${mainColorLight};
    transform: scale(1.1);
  }
`;

export const HelpInfoWrapper = styled(EventsWrapper)`
  align-items: flex-start;
  background-color: #c18039;
  color: #fff;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  @media (orientation: portrait) {
    margin-top: 6vh;
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    margin-right: 1em;
    padding: 2em 3em 3.5em;
  }
`;

export const VolunteerInfoSectionButton = styled(EventsButton)`
  margin-top: 2em;
`;

export const VolunteerInfoTitle = styled(H1About)`
  @media (${({ theme }) => theme.l}) and (orientation: landscape) {
    font-size: 2em;
  }
`;

export const AllEventsWrapper = styled(InfoWrapper)`
  position: absolute;
  top: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-start;
    padding: 0 5vmin;
  }

  @media (${({ theme }) => theme.xxl}) {
    width: 60%;
    padding: 0;
  }

  transform: translate(100vw, -50%);
`;

export const VolunteerInfoWrapperMore = styled(AllEventsWrapper)`
  transform: translate(-100vw, -50%);
`;

export const EventDetailsWrapper = styled(AllEventsWrapper)`
  transform: translate(200vw, -50%);
`;

const ButtonSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(50% - 100px);

  width: 6vmin;
  height: 12vmin;
  background-color: ${mainColorDark};
  color: white;
  font-size: 1.5em;

  cursor: pointer;

  & svg {
    transition: 0.3s;
  }

  @media (${({ theme }) => theme.m}) and (oriantation: portrait) {
    width: 4vmin;
    height: 8vmin;
    font-size: 3rem;
  }

  @media (${({ theme }) => theme.l}) {
    width: 5vmin;
    height: 10vmin;
    font-size: 3rem;
  }
`;

export const ButtonSlideLeft = styled(ButtonSlide)`
  right: ${(props) => (props.left ? '100%' : 0)};

  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;

  &:hover svg {
    transform: translateX(-20%);
  }
`;

export const ButtonSlideRight = styled(ButtonSlide)`
  left: ${(props) => (props.left ? 0 : '100%')};

  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;

  &:hover svg {
    transform: translateX(20%);
  }
`;

export const ButtonSlideLeftEventDetails = styled(ButtonSlideRight)`
  left: 200%;
`;
