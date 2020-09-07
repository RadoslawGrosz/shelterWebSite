import styled from 'styled-components';
import backgroundDog from '../../../img/backgroundDog.jpg';

export const StyledHeader = styled.header`
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 5vh;

  background-image: url(${backgroundDog});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 30vh;
  justify-content: space-between;
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-bottom: 0.5vw solid black;
  padding: 5px;
  z-index: 1;

  background-color: transparent;
  color: black;

  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 5.5vw;

  outline: none;
  transition: 0.3s;
  cursor: pointer;

  &:nth-child(1) {
    margin-right: auto;
    opacity: 0;
    transform: translateX(-50px);
  }
  &:nth-child(2) {
    margin-left: auto;
    opacity: 0;
    transform: translateX(50px);
  }
  &:hover {
    letter-spacing: 0.6vw;
    @media (orientation: landscape) {
      letter-spacing: 0.6vh;
    }
  }
  @media (orientation: landscape) {
    border-bottom-width: 0.5vh;
    font-size: 5.5vh;
  }
  @media (${({ theme }) => theme.l}) {
    font-size: 4rem;
  }
`;
