import styled, { keyframes } from 'styled-components';

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

	min-height: 40vh;
  z-index: 1;
	background-color: #020100;
`;

export const StyledH1 = styled.h1`
	flex-basis: 100%;

	font-size: 5vw;
	line-height: 10vh;
	text-align: center;
	text-transform: uppercase;
	
	background-color: #fcbf1e;

	@media (orientation: landscape) {
		font-size: 5vh;
	}
`;

export const StyledArticle = styled.article`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	flex-basis: 100%;

	padding: 0 3vw 3vw 3vw;
	overflow: hidden;

	@media (orientation: landscape) {
		flex-basis: 50%;
		height: 80vh;
	}
`;

export const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-basis: 100%;

	max-width: 1600px;
	margin-top: 3vh;
	overflow: hidden;
	
	background-color: #40bad5;

	&:nth-child(odd) {
		background-color: #fcbf1e;
		& ${StyledArticle} {
			@media (orientation: landscape) {
				order: -1;
			}
		}
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-basis: 100%;
	height: 40vh;

	overflow: hidden;
	background: ${(props) => `url(${props.src}) no-repeat center center`};
	background-size: cover;

	@media (orientation: landscape) {
		flex-basis: 50%;
		height: 80vh;
	}
`;

export const StyledH2 = styled.h2`
	flex-basis: 100%;

	font-size: 5vw;
	line-height: 12vw;
	text-align: center;

	@media (orientation: landscape) {
		font-size: 5vh;
		line-height: 10vh;
	}
	@media (${({ theme }) => theme.m}) {
  	font-size: 3rem;
  }
`;

export const StyledP = styled.p`
	font-size: 4vw;
	text-align: justify;
	letter-spacing: .2vh;

	@media (orientation: landscape) {
		padding: 0 1vw 0 1vw;
		font-size: 4vh;
	}
	@media (${({ theme }) => theme.m}) {
    	font-size: 2.5rem;
  }
`;

export const Spinner = styled.div`
	width: 10%;
	padding-bottom: 10%;
	margin: 10vw 0 10vw 0;

	background-color: white;

	animation: ${rotateSpinner} 1.2s infinite ease-in-out;
`;

export const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 100%;

	max-width: 1200px;
	margin-top: 3vh;

	overflow: hidden;
	order: 2;
`;
