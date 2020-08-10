import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    @media (min-width: 700px) {
        width: 100%;
    }
`;

export const Main = styled.main`
    margin: 3.2rem auto;
    width: 90%;

    @media (min-width: 700px) {
        padding: 3.2rem 0;
        max-width: 740px;
        margin: 0 auto;
    }
`;


