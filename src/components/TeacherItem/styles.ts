import styled from 'styled-components';

export const TeacherItemArticle = styled.article`
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
    
    & > p {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;

        @media (min-width: 700px) {
            padding: 0 3.2rem;
        }
    }
`;

export const TeacherItemHeader = styled.header`
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        margin-right: 0.8rem;
    }

    div {
        strong {
            font: 700 2.4rem Archivo;
            color: var(--color-text-title);
        }

        span {
            display: block;
            font-size: 1.6rem;
        }
    }

    @media (min-width: 700px) {
        padding: 3.2rem;
    }
`;

export const TeacherItemFooter = styled.footer`
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        strong {
            color: var(--color-primary);
            display: block;

            @media (min-width: 700px) {
                display: initial;
                margin-left: 1.6rem;
            }
        }
    }

    a {
        width: 20rem;
        height: 5.6rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 0.8rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: none;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        transition: background 0.3s;
        text-decoration: none;

        &:hover {
            background: var(--color-secundary-dark);
        }

        @media (min-width: 700px) {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;

            img {
                margin-right: 1.6rem;
            }
        }
    }

    @media (min-width: 700px) {
        padding: 3.2rem;
    }
`;