import {Link} from "react-router-dom";
import { useState } from "react";

type Props = {};


const Navbar = (props: Props) => {
	
	return (
		
		<nav
			className="navbar bg-dark navbar-expand-lg"
			data-bs-theme="dark"
		>
			
			<div className="container">
				<Link to={"/"} className="navbar-brand">
					PIXARRENTS
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to={"/"}>
								Ana Sayfa
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to={"/products"}>
								Urunler
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/add-product"}>
								Ürün Ekle
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;