import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string;
            primaryLighter: string;
            primaryLight: string;
            primary: string;
            primaryDark: string;
            primaryDarker: string;
            secondary: string;
            secondaryDark: string;
            titlePrimary: string;
            textPrimary: string;
            textTitle: string;
            textComplement: string;
            textBase: string;
            lineInWhite: string;
            inputBackground: string;
            buttonText: string;
            boxBase: string;
            boxFooter: string;
        }
    }
}