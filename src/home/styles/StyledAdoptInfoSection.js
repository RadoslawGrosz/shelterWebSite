import styled from 'styled-components';

export const StyledMain = styled.main`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100vw;
  margin-top: 100vh;
  padding-top: 10vh;
  padding-bottom: 30vmax;
  z-index: 10;

  background-color: ${({ theme }) => theme.mainColorBlack};
  color: #fff;

  @media (${({ theme }) => theme.xxl}) {
    padding-bottom: 40rem;
  }
`;

export const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  padding: 0 5vw 0;

  text-transform: uppercase;
  font-size: 2.5vmax;
  letter-spacing: 0.3vmin;

  @media (orientation: landscape) {
    font-size: 4vmax;
    line-height: 15vmax;
  }

  @media (${({ theme }) => theme.m}) and (orientation: portrait) {
    font-size: 4rem;
    line-height: 15rem;
  }

  @media (${({ theme }) => theme.l}) and (orientation: portrait) {
    font-size: 4.5rem;
    line-height: 15rem;
  }

  @media (${({ theme }) => theme.xl}) {
    font-size: 5rem;
    line-height: 15rem;
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
    align-items: stretch;
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  width: 80vw;
  margin-top: 10vh;
  padding: 2% 2%;

  font-family: Rowdies;

  @media (${({ theme }) => theme.l}) and (orientation: portrait) {
    width: 50vw;
  }

  @media (orientation: landscape) {
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

  @media (${({ theme }) => theme.l}) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media (${({ theme }) => theme.xl}) {
    font-size: 2.5rem;
  }
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: space-between;

  flex-basis: 100%;

  margin-top: 5%;

  text-align: center;
  font-size: 2vmax;
  letter-spacing: 0.2vh;

  opacity: 0;
  transform: translateY(50px);

  @media (${({ theme }) => theme.m}) and (orientation: portrait) {
    font-size: 2.2rem;
    line-height: 3rem;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 1.6rem;
    line-height: 3rem;
  }

  @media (${({ theme }) => theme.xl}) {
    font-size: 2rem;
    line-height: 3.5rem;
  }
`;

export const StyledIconContainer = styled(StyledP)`
  flex: 0;

  margin-top: 10%;

  font-size: 3.5vmax;

  transition: 0.5s;
  color: ${({ theme }) => theme.mainColorLight};

  @media (${({ theme }) => theme.m}) {
    font-size: 4rem;
  }

  @media (${({ theme }) => theme.l}) {
    font-size: 5rem;
  }
`;
