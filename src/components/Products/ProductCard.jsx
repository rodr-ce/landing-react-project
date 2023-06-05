import React from 'react'
import { Article, Button, ButtonConteiner } from './ProductStyles'
import CartContext from '../../context/ProductContext/CartContext';
import { useContext } from "react";


export const ProductCard = ({item}) => {
    const { addToCart  } = useContext(CartContext);

    return (
        <Article key={item.id}>
            <img src={item.img} alt="imagen de album" width={200} />
            <h3>{item.album}</h3>
            <p>{item.artist}</p>
            <p className='italic'>${item.price}</p>
            <ButtonConteiner>
                        <Button onClick={() => {addToCart(item)}}>Agregar al carrito</Button>     
            </ButtonConteiner>
        </Article>
    )
}
