import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;

	min-height: 40vh;

	background-color: #fff;
  z-index: 1;

	@media (orientation: landscape) {
		padding: 10vh 0 10vh;
	}
`;

export const StyledArticleHover = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;

  color: white;
  background-color: rgba(0, 0, 0, 0.7);

  opacity: 0;
  transition: .5s;

  &:hover{
    opacity: 1;
  }
`;

export const ButttonDel = styled.h2`
  font-size: 10vmax;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
export const ButttonEdit = styled.h2`
  font-size: 10vmax;
  cursor: pointer;

  &:hover {
    color: green;
  }
`;