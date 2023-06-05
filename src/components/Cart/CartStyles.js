import { styled } from "styled-components";

export const CartWrapper = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CartList = styled.ul`
    width: 90%;;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 10px;
`

export const CartItemCard = styled.li`
    width: 90%;
    height: 180px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--dark-background-contrast);
    border-radius: 0.5em;
    
`

export const CartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;

`

export const CardImage = styled.img`
    width: 50px;
    height: 50px;
`

export const ButtonConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardButton = styled.button`
    width: 50px;
    height: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-red);
`

export const CartButtonConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;

    & .blue {
        background-color: var(--blue);
    }

    & .dark-red {
        background-color: var(--dark-red);
    }

`