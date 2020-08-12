import { createGlobalStyle } from 'styled-components';

export const StyledApp = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    .Wrapper {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
`;