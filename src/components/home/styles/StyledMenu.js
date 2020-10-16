import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 2;
  
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  padding: .5vmin;

  list-style: none;
  
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

export const StyledLi = styled.li`
  opacity: 0;
  padding: 2%;
  cursor: pointer;

  &:nth-child(odd) {
    text-align: left;
  }
  &:nth-child(even) {
    text-align: right;
  }
  @media (orientation: landscape) {
    padding: 0;
    border-left: 0.2vmin solid black;

    &:nth-child(1){
      margin-right: auto;
      border: none;
    }

    &:nth-child(2){
      border: none;
    }

    &:nth-last-child(1){
      text-align: right;
      color: #f05f40;
    }
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  padding: 5px;
  margin-bottom: 3.5vh;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2vmax;
  line-height: 4vmax;
  font-weight: bold;
  text-align: center;

  transition: 0.3s;

  @media (orientation: landscape) {
    margin: 0;
    padding: 0 1.5vmax 0 1.5vmax;
  }

  @media (${({ theme }) => theme.l}) and (orientation: landscape){
    font-size: 1.8rem;
    line-height: 4rem;
  }

  @media (${({ theme }) => theme.m}) and (orientation: portrait){
    font-size: 2.5rem;
  }

  @media (hover: hover) {
    &:hover {
      color: #f05f40;
    }
  }
`;

export const LogoContainer = styled.b`
  margin-right: 2vmin;
  color: #4296F0;
`;