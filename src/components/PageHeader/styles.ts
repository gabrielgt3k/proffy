import styled from 'styled-components';

export const Header = styled.header`
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 340px;
    }

    input {
        justify-content: end;
    }
`;

export const HeaderTop = styled.div`
    width: 90%;
    padding: 1.6rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img {
        height: 1.6rem;
    }

    a {
        height: 3.2rem;
        transition: opaticy 0.3s;

        &:hover {
            opacity: 0.6;
        }
    }

    @media (min-width: 700px) {
        max-width: 1100px;
    }
`;

export const HeaderContent = styled.div`
    width: 90%;
    position: relative;
    margin: 3.2rem auto;
    margin-bottom: 6.4rem;

    @media (min-width: 700px) {
        flex: 1;
        max-width: 740px;
        margin: 0 auto;
        padding-bottom: 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 0;
    }

    strong {
        color: var(--color-title-in-primary);
        font: 600 3.6rem Archivo;
        line-height: 4.2rem;

        @media (min-width: 700px) {
            max-width: 350px;
        }
    }

    span {
        display: block;
        margin-top: 2.4rem;
        font: 500 1.6rem Archivo;
        line-height: 2.6rem;
        color: var(--color-text-in-primary);
        max-width: 30rem;
        
    }
`;