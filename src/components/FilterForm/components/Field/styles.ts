import styled from 'styled-components';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: var(--color-text-in-primary);
    position: relative;

    & + label {
        margin-top: 1.4rem;
        @media (min-width: 700px) {
            margin-top: 0;
        }
    }


    span {
        font-size: 1.4rem;
    }

    &:focus-within::after {
        width: (100% - 3.2rem);
        height: 2px;
        content: '';
        background: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    outline: none;
    border: 1px solid var(--color-line-in-white);
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
`;

export const Select = styled.select`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    outline: none;
    border: 1px solid var(--color-line-in-white);
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    & + input {
        margin-top: 2.4rem;
    }
`;