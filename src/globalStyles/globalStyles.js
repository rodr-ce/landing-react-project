import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --dark-background: #242424;
        --dark-background-contrast: #484848;
        --dark-font-color: #e1edf2;
        --purple: #845ec2;
        --purple-off: #9b89b3;
        --dark-red: #c34a36;
        --light-red: #ff8066;
        --blue: #0089ba;
    }

    body {
        background-color: var(--dark-background);
        color: var(--dark-font-color);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    li {
        list-style-type: none;
    }

`;
