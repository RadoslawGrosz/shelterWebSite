import styled from 'styled-components';

export const StyledSection = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	min-height: 60vh;
	align-items: center;
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

export const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-basis: 100%;
	margin-top: 3vh;
	background-color: #00DCFF;
	&:nth-child(odd) article {
		background-color: #F1D302;
		@media (orientation: landscape) {
			order: -1;
		}
	}
`;

export const StyledImg = styled.img`
	width: 100%;
	height: 40vh;
	@media (orientation: landscape) {
		width: 50%;
	}
`;

export const StyledArticle = styled.article`
	height: 40vh;
	flex-basis: 100%;
	overflow: hidden;
	@media (orientation: landscape) {
		flex-basis: 50%;
	}
`;

export const StyledH2 = styled.h2`
	text-align: center;
	font-size: 6vw;
	line-height: 12vw;
	font-family: Rowdies;
	@media (orientation: landscape) {
		font-size: 6vh;
		line-height: 10vh;
	}
`;

export const StyledP = styled.p`
	font-size: 5vw;
	padding: 0 1vw 0 1vh;
	@media (orientation: landscape) {
		font-size: 5vh;
		padding: 0 1vw 0 1vw;
	}
`;
