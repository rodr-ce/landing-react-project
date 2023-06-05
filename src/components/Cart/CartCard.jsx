/* import React from 'react'
import { useContext } from "react";
import CartContext from "../../context/ProductContext/CartContext";
import { FaTrashAlt, FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { CartItemCard } from "./CartStyles";

export const CartCard = (item) => {
    const { removeFromCart, increase, decrease } = useContext(CartContext);
    return (
        <CartItemCard>
            <div>
                <h3>AAAAA{item.name}</h3>
                <p>{item.price}</p>
            </div>
            <div>
                <button onClick={() => removeFromCart(item)}><FaTrashAlt></FaTrashAlt></button>
                <button onClick={() => increase(item)}><FaPlusSquare></FaPlusSquare></button>
                <button onClick={() => decrease(item)}><FaMinusSquare></FaMinusSquare></button>
            </div>
        </CartItemCard>
    )
}
 */