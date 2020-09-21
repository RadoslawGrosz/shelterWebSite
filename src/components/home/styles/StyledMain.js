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

  background-color: #f05f40;
  box-shadow: 0px 5px 20px;
  color: #FDFFFC;
`;

export const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  padding: 0 5vw 0;

  text-transform: uppercase;
  font-size: 5.2vw;
  letter-spacing: .3vh;

  @media (orientation: landscape) {
    font-size: 5.2vh;
    margin-bottom: 0;
    letter-spacing: .3vw;
  }
  @media (${({ theme }) => theme.l}) {
    font-size: 3rem;
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
  font-size: 5vw;
  letter-spacing: .2vh;

  @media (orientation: landscape) {
    font-size: 5vh;
    letter-spacing: .2vw;
  }
  @media (${({ theme }) => theme.l}) {
    font-size: 2rem;
  }
`;

export const StyledP = styled.p`
  flex-basis: 100%;

  margin-top: 5%;

  text-align: center;
  font-size: 4vw;
  letter-spacing: .2vh;

  opacity: 0;
  transform: translateY(50px);

  @media (orientation: landscape) {
    font-size: 4vh;
  }
  @media (${({ theme }) => theme.l}) {
    font-size: 2rem;
  }
`;

export const StyledIconContainer = styled(StyledP)`
  margin-top: 10%;
  font-size: 7vw;

  @media (orientation: landscape) {
    font-size: 7vh;
  }
  @media (${({ theme }) => theme.l}) {
    font-size: 4rem;
  }
`;
