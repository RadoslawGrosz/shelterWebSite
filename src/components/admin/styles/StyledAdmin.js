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

export const Button = styled.h2`
  font-size: 8vmax;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButttonDel = styled(Button)`
  &:hover {
    color: red;
  }
`;

export const ButttonEdit = styled(Button)`
  &:hover {
    color: green;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  align-self: flex-end;

  padding: 2vmin 0;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const ButtonAdd = styled.p`
  width: 15vmin;
  height: 7vmin;
  border-radius: 10%;
  
  font-size: 3vmin;
  line-height: 7vmin;
  text-align: center;
  text-transform: uppercase;

  background-color: white;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: #03a1fc;
    color: #fff;
  }

  &::after {
    content: "Dodaj";
  }
`;
