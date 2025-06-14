import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 100px;


`

export const ContainerItens = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 240px);
    gap: 16px;

    @media (max-width: 480px) {
        grid-template-columns: 328px;
    }
`