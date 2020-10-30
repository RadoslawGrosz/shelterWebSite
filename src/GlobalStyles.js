import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 10px;
        scroll-behavior: smooth;
        cursor: default;
    }
`;
