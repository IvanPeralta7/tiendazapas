import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage/homePage"
import Products from "./Products/products";
import { ProductDetail } from "./Products/ProductDetail";


const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/productos" element={<Products/>} />
                <Route path="/productos/:id" element={<ProductDetail/>} />
            </Routes>
        </section>
    )
}

export default Paginas;