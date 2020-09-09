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
	min-height: 60vh;
  z-index: 1;
	background-color: #020100;
`;

export const StyledH1 = styled.h1`
	flex-basis: 100%;
	font-size: 5vw;
	background-color: #FF8600;
	text-align: center;
	/* color: white; */
	text-transform: uppercase;
	line-height: 10vh;
	/* background-color: #FF36A0; */
	@media (orientation: landscape) {
		font-size: 5vh;
	}
`;

export const StyledArticle = styled.article`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	height: 40vh;
	flex-basis: 100%;
	overflow: hidden;
	@media (orientation: landscape) {
		flex-basis: 50%;
		height: 40vw;
	}
`;

export const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-basis: 100%;
	max-width: 1400px;
	overflow: hidden;
	margin-top: 3vh;
	background-color: #00DCFF;
	&:nth-child(odd) {
		background-color: #F1D302;
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
	background: ${(props) => `url(${props.src}) no-repeat center center`};
	background-size: cover;
	height: 40vh;
	flex-basis: 100%;
	overflow: hidden;
	@media (orientation: landscape) {
		flex-basis: 50%;
		height: 40vw;
	}
`;

export const StyledH2 = styled.h2`
	flex-basis: 100%;
	text-align: center;
	font-size: 5vw;
	line-height: 12vw;
	font-family: Rowdies;
	@media (orientation: landscape) {
		font-size: 5vh;
		line-height: 10vh;
	}
	@media (${({ theme }) => theme.l}) {
  	font-size: 3rem;
  }
`;

export const StyledP = styled.p`
	font-size: 4vw;
	padding: 0 1vw 0 1vh;
	@media (orientation: landscape) {
		font-size: 4vh;
		padding: 0 1vw 0 1vw;
		@media (${({ theme }) => theme.m}) {
    	font-size: 2rem;
  	}
	}
	@media (${({ theme }) => theme.l}) {
    	font-size: 2rem;
  	}
`;

export const Spinner = styled.div`
	width: 20%;
	padding-bottom: 20%;
	background-color: white;
	animation: ${rotateSpinner} 1.2s infinite ease-in-out;
	@media (orientation: landscape) {
		width: 10%;
		padding-bottom: 10%;
	}
`;
