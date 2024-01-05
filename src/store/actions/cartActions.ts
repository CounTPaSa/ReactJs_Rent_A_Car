
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

class cartActions
{
    addToCart(product:any)
    {
    return  {type: REMOVE_FROM_CART,payload: product}
    }
    removeFromCart(product:any)
    {
    return  {type: REMOVE_FROM_CART,payload: product}
    }
}