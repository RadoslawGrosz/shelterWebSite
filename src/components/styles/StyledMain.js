import style from 'styled-components';


export const StyledMain = style.main`

    & {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-top: 100vh;
        z-index: 1;
        background-color: #BCAC6C;
        box-shadow: 0px 5px 40px;
        @media (orientation: landscape) {
            flex-direction: row;
        }
        & .Main {
            &__title {
                width: 100%;
                text-align: center;
                margin-top: 5vh;
                text-transform: uppercase;
                font-size: 30px;
            }
            &__Info-container {
                margin: 5vh 0 5vh 0;
                padding: 5%;
                width: 60vw;
                height: 60vw;
                border: 4px solid black;
                background-color: white;
                font-family: Rowdies;
                @media (orientation: landscape) {
                    width: 30vw;
                    height: 30vw;
                }
                &__title {
                    text-transform: uppercase;
                    text-align: center;
                }
                &__text {
                    margin-top: 5%;
                    text-align: justify;
                }
            }
        }
`