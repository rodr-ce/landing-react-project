import { useReducer, useEffect } from "react";
import CartContext, { storage } from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, CLEAR, REMOVE_ITEM } from "./CartTypes";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: storage,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (payload) => {
    dispatch({ type: ADD_TO_CART, payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: REMOVE_ITEM, payload });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;