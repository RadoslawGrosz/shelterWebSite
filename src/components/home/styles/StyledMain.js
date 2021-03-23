import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100vw;
  margin-top: 100vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
  z-index: 1;

  /* background-color: #f05f40; */
  background-color: #232220;
  box-shadow: 0px 5px 20px;
  color: #fdfffc;
`;

export const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  padding: 0 5vw 0;

  text-transform: uppercase;
  font-size: 2.5vmax;
  letter-spacing: 0.3vmin;

  @media (${({ theme }) => theme.m}) and (orientation: portrait) {
    font-size: 2.2rem;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 2rem;
  }
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  margin-top: 2vh;

  @media (orientation: landscape) {
    flex-direction: row;
    justify-content: center;
  }
`;

// Container for h2 and p
export const StyledArticle = styled.article`
  width: 60vw;
  margin-top: 10vh;
  padding: 2% 5%;

  font-family: Rowdies;

  @media (orientation: landscape) {
    width: 30vw;
    margin-top: 0;
  }
`;

export const StyledH2 = styled.h2`
  padding: 3vh;
  border-bottom: 2px solid grey;

  text-transform: uppercase;
  text-align: center;
  font-size: 2vmax;
  letter-spacing: 0.2vmin;

  @media (${({ theme }) => theme.m}) and (orientation: portrait) {
    font-size: 2.5rem;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 2rem;
  }
`;

export const StyledP = styled.p`
  flex-basis: 100%;

  margin-top: 5%;

  text-align: center;
  font-size: 2vmax;
  letter-spacing: 0.2vh;

  opacity: 0;
  transform: translateY(50px);

  @media (${({ theme }) => theme.m}) and (orientation: portrait) {
    font-size: 2.2rem;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 1.5rem;
  }
`;

export const StyledIconContainer = styled(StyledP)`
  margin-top: 10%;
  font-size: 3.5vmax;

  transition: 0.5s;

  @media (${({ theme }) => theme.m}) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 3rem;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ blue }) => (blue ? '#3b5998' : 'white')};
    }
  }
`;
