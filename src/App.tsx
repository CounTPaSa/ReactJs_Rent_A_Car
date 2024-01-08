import {ReactElement} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./components/navbar/navbar";
import AddProduct from "./pages/AddProduct/AddProduct";
import Products from "./pages/Products/Products";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Login from "./components/LogIn/Login";
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/" element={<Homepage/>}></Route>
      <Route path = "/products" element={<Products/>}></Route>
      <Route path = "/product-detail/:id" element={<ProductDetail/>}></Route>
      <Route path = "/add-product" element={<AddProduct/>}></Route>
      <Route path = "/login" element={<Login/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
