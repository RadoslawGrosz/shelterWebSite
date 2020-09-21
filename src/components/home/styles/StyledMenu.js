import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 4;
  
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  list-style: none;

  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

export const StyledLi = styled.li`
  transition: 0.3s;
  opacity: 0;
  padding: 2%;

  &:nth-child(odd) {
    text-align: left;
  }
  &:nth-child(even) {
    text-align: right;
  }
  @media (orientation: landscape) {
    padding: 0;
    flex-basis: 33%;

    &:nth-child(odd) {
      text-align: center;
    }
    &:nth-child(even) {
      text-align: center;
    }

    &:nth-child(3){
      text-align: right;
      padding-right: 2%;
      color: #f05f40;
    }
  }
`;

export const StyledA = styled.a`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 5.5vw;

  display: inline-block;
  width: auto;
  border-bottom: 0.5vw solid black;
  padding: 5px;
  margin-bottom: 6.5vh;

  text-align: center;
  cursor: pointer;

  @media (orientation: landscape) {
    margin: 0;
    border: none;
    font-size: 5.5vh;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 3.5rem;
  }

  &:hover {
    color: #f05f40;
  }
`;
