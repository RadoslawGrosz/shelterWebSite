import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  padding-left: 10%;
  z-index: 1;
  background-color: #020100;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  
  font-size: 6vw;
  line-height: 12vw;
  
  color: white;
  & p {
    margin-left: 1vw;
  }

  &:hover {
    cursor: pointer;
  }

  @media (orientation: landscape) {
    font-size: 6vh;
    line-height: 12vh;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 3rem;
  }
`;
