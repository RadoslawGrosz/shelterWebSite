import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 10px;
    }

`;

export const StyledWrapper = styled.div`
  & {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    overflow: hidden;
  }
`;
