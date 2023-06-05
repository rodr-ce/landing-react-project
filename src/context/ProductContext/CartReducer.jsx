import {
  REMOVE_ITEM,
  ADD_TO_CART,
  CLEAR,
} from "./CartTypes.js";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case CLEAR:
      return {
        cartItems: [],
        storage: []
      };

    default:
      return state;
  }
};

export default CartReducer;