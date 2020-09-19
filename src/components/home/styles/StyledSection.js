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

	/* background-color: #020100; */
	background-color: #fff;

	@media (orientation: landscape) {
		padding: 10vh 0 10vh;
	}
`;

export const StyledH1 = styled.h1`
	flex-basis: 100%;

	font-size: 5vw;
	line-height: 10vh;
	text-align: center;
	text-transform: uppercase;

	/* background-color: #fcbf1e; */
	background-color: #fff;

	@media (orientation: landscape) {
		font-size: 5vh;
	}

	@media (${({ theme }) => theme.l}) {
    font-size: 3rem;
  }
`;

export const StyledArticle = styled.article`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	flex-basis: 100%;

	padding: 1vw 3vw 3vw 3vw;
	/* overflow: hidden; */

	@media (orientation: landscape) {
		flex-basis: 50%;
		min-height: 80vh;
		@media (${({ theme }) => theme.l}) {
  		min-height: 50vh;
  	}
	}
`;

export const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-basis: 100%;

	max-width: 1600px;
	margin-top: 3vh;
	overflow: hidden;
	
	color: white;
	/* background-color: #40bad5; */
	background-color: #f05f40;

	&:nth-child(odd) {
		/* background-color: #fcbf1e; */
		background-color: #4296F0;
		& ${StyledArticle} {
			@media (orientation: landscape) {
				order: -1;
			}
		}
	}
`;

export const ImageContainer = styled.div`
	flex-basis: 100%;
	height: 40vh;

	overflow: hidden;
	background: ${(props) => `url(${props.src}) no-repeat center center`};
	background-size: cover;

	@media (orientation: landscape) {
		flex-basis: 50%;
		height: auto;
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
  	font-size: 2.5rem;
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
	@media (${({ theme }) => theme.l}) {
    	font-size: 2rem;
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
