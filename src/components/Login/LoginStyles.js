import { styled } from "styled-components";
import {FaWindowClose} from 'react-icons/fa'

export const LoginPage = styled.div`
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.4);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const LoginConteiner = styled.div`
padding: 30px;
background-color: var(--dark-background);
width: 300px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-radius: 0.5em;
`

export const LoginForm = styled.form`
background-color: var(--dark-background);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap: 30px;

fieldset {
    border: none;
    width: 100%;
    display: flex;
    flex-direction: column;
}

input {
    margin-top: 5px;
    width: 100%;
}

label {
    width: 100%;
}

button {
    background-color: var(--purple);
    color: var(--dark-font-color);
}
`

export const CloseWindow = styled(FaWindowClose)`
font-size: 18px;
`