import React from 'react'
import { Article, Button, ButtonConteiner } from './ProductStyles'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'

export const ProductCard = ({id, img, album, artist, price}) => {
    const dispatch = useDispatch()

    return (
        <Article key={id}>
            <img src={img} alt="imagen de album" width={200} />
            <h3>{album}</h3>
            <p>{artist}</p>
            <p className='italic'>${price}</p>
            <ButtonConteiner>
                        <Button onClick={()=>
                        dispatch(addToCart({id, img, album, artist, price}))} >Agregar al carrito</Button>     
            </ButtonConteiner>
        </Article>
    )
}
