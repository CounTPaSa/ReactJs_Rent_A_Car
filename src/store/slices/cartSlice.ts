import { CartItem } from './../../models/Cart/CartItem';
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice(
    {
        name: "cart",
        initialState:{cartItems:(JSON.parse(localStorage.getItem("cart")!) || []) as CartItem[]},
        reducers: {
            addToCart:(state, action) => {
                const existingItem = state.cartItems.find((i:CartItem) => i.product.id === action.payload.id);

                if (existingItem)
                    existingItem.quantity++;
                else
                state.cartItems.push({product: action.payload, quantity:1})

                localStorage.setItem("cart", JSON.stringify(state.cartItems));
            },
            removeFromCart: (state, action) => {
                state.cartItems = state.cartItems.filter(
                    (i:any) => i.id !== action.payload.id,
                    
                );
                localStorage.setItem("cart", JSON.stringify(state.cartItems));

            },
            clearCart: state => {
               state.cartItems = [];
               localStorage.setItem("cart", JSON.stringify(state.cartItems));

            },
        },
    }
);

export const cartReducer = cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;