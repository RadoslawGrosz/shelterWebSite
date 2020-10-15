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
	width: 100%;

	min-height: 40vh;
  z-index: 1;

	background-color: rgba(0, 0, 0, 0.6);
`;

export const StyledH1 = styled.h1`
	flex-basis: 100%;

	font-size: 7vmin;
	line-height: 18vh;
	text-align: center;
	text-transform: uppercase;
	color: white;

	/* background-color: #fff; */

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
	flex-basis: 100%;

	padding: 1vw 3vw 3vw 3vw;

	@media (orientation: landscape) {
		flex-basis: 50%;
		min-height: 80vh;
	}

	@media (${({ theme }) => theme.l}) and (orientation: landscape) {
  	min-height: 50vh;
  }
`;

export const Wrapper = styled.main`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	flex-basis: 100%;

	max-width: 1600px;
	margin-bottom: 3vh;
	overflow: hidden;
	
	color: white;
	background-color: #4296F0;

	&:nth-of-type(even) {
		background-color: #f05f40;
		& ${StyledArticle} {
			@media (orientation: landscape) {
				order: -1;
			}
		}
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
	overflow: hidden;
	flex-basis: 100%;
	height: 40vh;

	@media (orientation: landscape) {
		flex-basis: 50%;
		height: auto;
	}
`;

export const ImageHover = styled.div`
	position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;

	padding: 15%;

  color: white;
  background-color: rgba(0, 0, 0, 0.4);

	opacity: 0;
  transition: .5s;

	& h2 {
		font-size: 3vmin;
		text-align: center;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	flex-basis: 100%;
	height: 40vh;

	overflow: hidden;
	background: ${(props) => `url(${props.src}) no-repeat center center`};
	background-size: cover;

	cursor: pointer;
	transition: .5s;

	@media (orientation: landscape) {
		height: auto;
	}

	@media (hover: hover) {
		&:hover ${ImageHover}{
			opacity: 1;
		}

		&:hover {
			transform: scale(1.2);
		}
	}
`;

export const StyledH2 = styled.h2`
	flex-basis: 100%;

	font-size: 4vmin;
	line-height: 12vmin;
	text-align: center;

	@media (${({ theme }) => theme.m}) {
  	font-size: 2.2rem;
  }
`;

export const StyledP = styled.p`
	font-size: 3vmin;
	text-align: justify;
	letter-spacing: .2vh;

	@media (${({ theme }) => theme.m}) and (orientation: portrait){
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
	height: 50vh;

	max-width: 1200px;
	margin-top: 3vh;

	overflow: hidden;
	order: 2;

	@media (orientation: landscape) {
		height: 80vh;
	}
`;
