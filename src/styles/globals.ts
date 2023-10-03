import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html, body {
        font-size: 62.5%;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`