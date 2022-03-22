import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &:focus {
            outline: none;
        }
    }

    html {
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 10px;
        scroll-behavior: smooth;
        cursor: default;
    }

    @font-face {
        font-family: 'Pacifico';
        font-style: normal;
        font-weight: 400;
        src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
        font-display: swap;
      }
`;
