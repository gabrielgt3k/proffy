import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    @media (min-width: 700px) {
        max-width: 100vw;
        width: 100%;
    }
`;

export const Main = styled.main`
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
`;

export const Fieldset = styled.fieldset`
    border: none;
    padding: 0 2.4rem;

    & + fieldset {
        margin-top: 6.4rem;
    }

    legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);

        button {
            background: none;
            border: none;
            cursor: pointer;
            color: ${props => props.theme.title === 'light' ? css`var(--color-primary)` : '#FFF'};
            font: 700 1.6rem Archivo;
            transition: color 0.3s;
            outline: none;
            &:hover {
                color: ${props => props.theme.title === 'light' ? css`var(--color-primary-dark)` : css`var(--color-text-base)`};
            }
        }
    }

    @media (min-width: 700px) {
        padding: 0 6.4rem;
    }
`;

export const Footer = styled.footer`
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-in-white);
    margin-top: 6.4rem;

    P {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);

        img {
            margin-right: 2rem;
        }

        @media (min-width: 700px) {
            justify-content: space-between;
        }
    }

    button {
        width: 100%;
        height: 5.6rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: none;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.3s;
        margin-top: 3.2rem;
        outline: none;
        &:hover {
            background-color: var(--color-secundary-dark);
        }

        @media (min-width: 700px) {
            width: 20rem;
            margin-top: 0;
        }
    }

    @media (min-width: 700px) {
        padding: 4rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ScheduleItem = styled.div`
    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;
    }
`;