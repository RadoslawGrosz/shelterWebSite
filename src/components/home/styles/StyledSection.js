import styled from 'styled-components';

export const StyledSection = styled.section`
	display: flex;
	justify-content: center;
	height: 60vh;
	align-items: center;
  z-index: 1;
	padding: 10vw;
  background-color: #F1D302;
	@media (orientation: landscape){
		height: 60vw;
	}
`;

export const StyledDiv = styled.div`
	flex-basis: 100%;
	height: 100%;
	background-image: url(${({ bgc }) => bgc});
	background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
`;
