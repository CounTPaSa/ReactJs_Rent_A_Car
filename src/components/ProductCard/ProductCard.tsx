import { Link } from "react-router-dom"
import { ProductModel } from "../../models/requests/ProductModel"

type Props = {product:ProductModel}

//? Bir alani nullable yapar
//! nullble alan icerisinde veri okurken "null degil ise" kontrolu yapar

const ProductCard = (props: Props) => {
  return (
    <div className="card">
			<img
				src={props.product.thumbnail}
				className="card-img-top img-fluid"
				alt="..."
			/>
			
			<div className="card-body">
		
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
	//	QUERY STRING -> to={"/product-detail?id=" + props.product.id}
                      to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Detail
				</Link>
				<button className="btn btn-danger">Sil</button>
			</div>
		</div>
  )
}

export default ProductCard