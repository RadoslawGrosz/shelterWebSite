import styled from 'styled-components';
import { DelButton } from './StyledAddingForm';

export const StyledWrapper = styled.div`
  display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;

	min-height: 40vh;

	background-color: #fff;
  z-index: 4;

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
  position: fixed;
  bottom: 2vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  align-self: flex-end;

  padding: 2vmin 0;

  z-index: 2;
`;

export const ButtonAdd = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  max-width: 300px;
  height: 15vmin;
  max-height: 80px;
  
  font-size: 8vmin;
  line-height: 7vmin;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2vmin;
  font-weight: bold;

  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  z-index: 2;

  transition: 0.3s;

  &:hover {
    background-color: ${({ bgcHover }) => bgcHover};
    color: #fff;
  }

  @media (${({ theme }) => theme.m}) {
    font-size: 3rem;
    border-radius: 5%;
  }
`;

export const LogoutButton = styled(DelButton)`
  position: fixed;
  z-index: 2;

  left: 2vmin;
  right: auto;
`;
