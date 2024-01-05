import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

interface CartItem {
    quantity: number;
    product: any; // You should replace 'any' with the actual type of your product
  }

  interface CartState {
    cartItems: CartItem[];
  }
  
  const initialState: CartState = {
    cartItems: cartItems,
  };

export default class Reducers {
  cartReducer(state: CartState = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
      case ADD_TO_CART:
        let product = state.cartItems.find((c) => c.product.id === action.payload.id);
        if (product) {
          product.quantity++;
          return { ...state };
        }
         else
        {
          return {
            ...state,
            cartItems: [...state.cartItems, { quantity: 1, product: action.payload }],
          };
        }
      default:
        return state;
    }
  }
}