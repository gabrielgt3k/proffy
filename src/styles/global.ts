import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 60%;
        --color-background: ${props => props.theme.colors.background};
        --color-primary-lighter: ${props => props.theme.colors.primaryLighter};
        --color-primary-light: ${props => props.theme.colors.primaryLight};
        --color-primary: ${props => props.theme.colors.primary};
        --color-primary-dark: ${props => props.theme.colors.primaryDark};
        --color-primary-darker: ${props => props.theme.colors.primaryDarker};
        --color-secundary: ${props => props.theme.colors.secondary};
        --color-secundary-dark: ${props => props.theme.colors.secondaryDark};
        --color-title-in-primary: ${props => props.theme.colors.titlePrimary};
        --color-text-in-primary: ${props => props.theme.colors.textPrimary};
        --color-text-title: ${props => props.theme.colors.textTitle};
        --color-text-complement: ${props => props.theme.colors.textComplement};
        --color-text-base: ${props => props.theme.colors.textBase};
        --color-line-in-white: ${props => props.theme.colors.lineInWhite};
        --color-input-background:${props => props.theme.colors.inputBackground};
        --color-button-text: ${props => props.theme.colors.buttonText};
        --color-box-base: ${props => props.theme.colors.boxBase};
        --color-box-footer: ${props => props.theme.colors.boxFooter};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        background: var(--color-background);
        transition: all 0.25s linear;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea {
        font: 500 1.6rem Poppins;
        color: var(--color-text-base);
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;