import React, { useContext } from 'react'
import { ButtonConteiner, CardImage, CardButton, CartItemCard, CartList, CartWrapper, CartItemInfo, CartButtonConteiner } from './CartStyles'
import { FaTrashAlt } from 'react-icons/fa'



export const Cart = () => {
    
    return (
        <CartWrapper>
            {
                /* cartItems.length === 0 ?  */<span>El Carrito esta vacio</span>/* :
                    { <>
                        <CartList>
                            {cartItems.map((item) => {
                                return (
                                    <CartItemCard key={item.album}>
                                        <div>
                                            <div>
                                                <CardImage src={item.img} alt={item.album} />
                                            </div>
                                            <CartItemInfo>
                                                <h3>{item.album}</h3>
                                                <p>{item.artist}</p>
                                                <p>${item.price}</p>
                                            </CartItemInfo>

                                        </div>
                                        <ButtonConteiner>
                                            <CardButton ><FaTrashAlt></FaTrashAlt></CardButton>
                                        </ButtonConteiner>
                                    </CartItemCard>
                                )
                            })}
                        </CartList>
                        <h4>Total de tu compra: $000</h4>
                        <CartButtonConteiner>
                            <button className='dark-red'>Borrar todo</button>

                            <button className='blue'> Finalizar Compra</button>
                        </CartButtonConteiner>
                    </> }*/
            }

        </CartWrapper>
    )
}
