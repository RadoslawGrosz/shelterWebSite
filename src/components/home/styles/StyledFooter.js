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
  
  font-size: 5vmin;
  line-height: 12vmin;
  
  color: white;
  & p {
    margin-left: 1vw;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 2.5rem;
  }
`;
