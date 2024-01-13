import React, { useEffect } from 'react'
import { ProductModel } from '../../models/requests/ProductModel'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'

type Props = {
}

const DetailedProduct = (props: any) => {
  
  const dispatch = useDispatch();

const addProductToCart = () =>{
  dispatch(addToCart(props.product))
}

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <img src={props.product.thumbnail} alt={props.product.title} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{props.product.title}</h2>
        <p>{props.product.description}</p>
        <p>Price: ${props.product.price.toFixed(2)}</p>
        <p>Discount: {props.product.discountPercentage}%</p>
        <p>Rating: {props.product.rating}</p>
        <p>Stock: {props.product.stock}</p>
        <p>Brand: {props.product.brand}</p>
        <p>Category: {props.product.category}</p>
          <button className="btn btn-success">
        Satin Al
          </button>
        <button onClick={addProductToCart} className="btn btn-primary ml-2">
        Sepete Ekle
          </button>
      </div>
    </div>


    <div className="row mt-4">
      <div className="col-md-12">
        <h3>Product Images</h3>
        <div className="row">
          {props.product.images.map((image: string | undefined, index: React.Key | null | undefined) => (
            <div key={index} className="col-4">
              <img src={image} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default DetailedProduct