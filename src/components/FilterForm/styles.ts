import styled from 'styled-components';

export const Form = styled.form`
    margin-bottom: 3.2rem;
    margin-top: 3.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        margin-top: 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -60px;
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
        outline: none;
        margin-top: 5.6rem;
        &:hover {
            background-color: var(--color-secundary-dark);
        }

        @media (min-width: 700px) {
            width: 20rem;
        }
    }
`;