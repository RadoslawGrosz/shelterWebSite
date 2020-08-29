import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  height: 10vh;
  z-index: 1;
  padding-left: 10%;
  background-color: #020100;
  @media (orientation: landscape) {
    height: 10vw;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 6vw;
  
  color: white;
  & p {
    margin-left: 1vw;
  }

  &:hover {
    cursor: pointer;
  }

  @media (${({ theme }) => theme.xl}) {
    font-size: 6rem;
  }

  @media (orientation: landscape) {
    font-size: 6vh;
  }
`;
