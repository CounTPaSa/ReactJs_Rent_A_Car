import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductModel } from '../../models/requests/ProductModel';
import ProductService from '../../services/ProductService';
import ProductCard from '../../components/ProductCard/ProductCard';
import DetailedProduct from '../../components/DetailedProduct/DetailedProduct';

type Props = {}

const ProductDetail = (props: Props) => {

        //QUERY STRING METHOD

    /*const location = useLocation();

    useEffect(() =>{
        
        let query = new URLSearchParams(location.search);
        console.log(query.get("id"));
    },[]);*/

        //USE PARAMS METHOD
    
        const [product, setProduct] = useState<ProductModel>()

        const params = useParams<{id : string}>();
        useEffect(() => {
            if(params.id)
            {
                fetchDetails(params.id);
            }
        }, [])

        const fetchDetails = async (id: string) => {
            let service: ProductService = new ProductService();
            let response = await service.GetById(id);
            setProduct(response.data);
        };

        if (!product) {
            return <div>Loading...</div>;
          }
        

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
            <DetailedProduct product={product}></DetailedProduct>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail