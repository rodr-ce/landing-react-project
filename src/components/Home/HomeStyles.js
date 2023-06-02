import { styled } from "styled-components";

export const HomeWrapper = styled.main`
width: 100vw;
height: 80vh;

img {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: -1;
}
`

export const Conteiner = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    background-color: rgba(200, 200, 200, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;

    h1 {
        font-size: 5em;
    }
    span {
        font-size: 2em;
    }
`