import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  background-color: #34495e;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  max-width: 600px;

  background-color: #191919;
`;

export const StyledH1 = styled.h1`
  font-size: 5vmin;
  line-height: 20vmin;
  letter-spacing: .5vmin;

  color: white;
  text-transform: uppercase;

  @media (${({ theme }) => theme.s}) {
    font-size: 2rem;
    line-height: 8rem;
  }

  @media (${({ theme }) => theme.m}) {
    font-size: 2.5rem;
    line-height: 12rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;

`;

export const StyledInput = styled.input`
  width: 70%;
  margin-bottom: 7vmin;
  border: .8vmin solid #3498db;
  border-radius: 20vmin;
  padding: 2.5vmin 1vmin;

  text-align: center;
  color: white;
  background-color: #191919;

  font-size: 4vmin;
  line-height: 9vmin;
  letter-spacing: .2vmin;

  transition: 0.8s;

  &:-webkit-autofill {
    box-shadow: 0 0 0 50px #191919 inset;
    -webkit-box-shadow: 0 0 0 50px #191919 inset;
    -webkit-text-fill-color: #fff;
    &::first-line {
      font-size: 4vmin;
      letter-spacing: .2vmin;
      @media (${({ theme }) => theme.s}) {
        font-size: 1.6rem;
        letter-spacing: .1rem;
      }
      @media (${({ theme }) => theme.l}) {
        font-size: 1.6rem;
        letter-spacing: .1rem;
      }
    }
  }
  
  &:focus {
    width: 85%;
    border-color: #2ecc71;
  }

  @media (${({ theme }) => theme.s}) {
    padding: .1rem .05rem;
    margin-bottom: 3rem;
    font-size: 1rem;
    line-height: 5.5rem;
    border-width: .2rem;
  }

  @media (${({ theme }) => theme.l}) {
    padding: .2rem .1rem;
    margin-bottom: 4.5rem;
    font-size: 2.5rem;
    line-height: 7rem;
    border-width: .3rem;
  }
`;

export const StyledButton = styled(StyledInput)`
  &[type="submit"] {
    width: 40%;
    background-color: #191919;
    font-size: 4vmin;
    letter-spacing: .3vmin;
    cursor: pointer;

    @media (${({ theme }) => theme.s}) {
      font-size: 1.5rem;
    }

    @media (${({ theme }) => theme.m}) {
      font-size: 2rem;
    }

    @media (hover: hover) {
      &:hover {
        background-color: #3498db;
      }
    }
  }
`;
