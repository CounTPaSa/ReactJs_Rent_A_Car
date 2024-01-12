import axios from "axios";
import { GetAllProductsModel } from "../models/requests/GetAllProductsModel";
import { ProductModel } from "../models/requests/ProductModel";

class ProductService
{
    getAll()
    {
        return axios.get<GetAllProductsModel>("https://dummyjson.com/products");
    }

    GetById(id:string)
    {
        return  axios.get<ProductModel>("https://dummyjson.com/products/" + id);
    }
}

export default ProductService;