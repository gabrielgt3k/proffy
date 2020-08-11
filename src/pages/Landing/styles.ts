import styled, { css } from 'styled-components';

interface Props {
    src: string | undefined;
    alt: string;
    href: string;
    color: string;
}

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
`;

export const Container = styled.div`
    width: 90vw;
    max-width: 700px;

    @media (min-width: 1100px) {
        display: grid;
        max-width: 1100px;

        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
            "logo hero hero"
            "buttons buttons total"
        ;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    img {
        height: 10rem;
        @media (min-width: 1100px) {
            height: 100%;
        }
    }
    margin-bottom: 3.2rem;

    h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.5rem;
        margin-top: 0.8rem;
        max-width: 40rem;

        @media (min-width: 1100px) {
            font-size: 3.2rem;
            text-align: left;
        }
    }

    @media (min-width: 1100px) {
        grid-area: logo;
        align-self: center;
        margin: 0;
        align-items: start;
        justify-content: start;
    }
`;

export const HeroImage = styled.img`
    width: 100%;

    @media (min-width: 1100px) {
        grid-area: hero;
    }
`;

export const TotalConnections = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-left: 0.8rem;
    }

    @media (min-width: 1100px) {
        grid-area: total;
        justify-self: end;
    }

    span {
        white-space: nowrap;
    }
`;
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin: 3.8rem 0;

    @media (min-width: 1100px) {
        grid-area: buttons;
        flex-direction: row;
        justify-content: start;
    }
`;

export const Button = styled.a<Partial<Props>>`
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    padding: 1.6rem 2.4rem;
    border-radius: 0.8rem;
    font: 600 2.0rem Archivo;
    cursor: pointer;
    color: var(--color-button-text);
    ${({ color }: Partial<Props>) => {
        switch(color) {
            case 'primary':
                return css`
                    background-color: var(--color-primary-lighter)
                `;
            case 'secundary':
                return css`
                    background-color: var(--color-secundary)
                `;
        }
    }};
    border: none;
    outline: none;
    transition: all 0.3s;
    &:hover,
    &:focus {
        ${({ color }: Partial<Props>) => {
        switch(color) {
            case 'primary':
                return css`
                    background-color: var(--color-primary-darker)
                `;
            case 'secundary':
                return css`
                    background-color: var(--color-secundary-dark)
                `;
        }
        }};
    }
    img {
        width: 4rem;
        margin-right: 2.4rem;
    }

    & + a {
        margin-top: 12px;
        @media (min-width: 1100px) {
            margin-top: 0;
            margin-left: 12px;
        }
    }

    @media (min-width: 1100px) {
        width: 30rem;
    }

`;
