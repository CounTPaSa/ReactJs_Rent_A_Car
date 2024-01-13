import { ProductModel } from "../requests/ProductModel";


//State
export interface CartItem{
    product:ProductModel;
    quantity:number;
}