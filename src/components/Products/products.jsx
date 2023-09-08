import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider"; 
import { ProductItem } from "./ProductItem";
import "./productsStyles.css"

const Products = () => {

    const value = useContext(DataContext);
    const [products] = value.products;
    return (
        <>
        <h1 className="title">ZAPAS NIKE</h1>
        <div className="productos">
            { products.map((producto) => {
                if((producto.brand === "Nike")){
                    return <ProductItem key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    brand={producto.brand}
                    category={producto.category}
                    cantidad={producto.cantidad}
                />
                }
                })
            }
        </div>
        <h1 className="title">ZAPAS ADIDAS</h1>
        <div className="productos">
            { products.map((producto) => {
                if((producto.brand === "Adidas")){
                    return <ProductItem key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    brand={producto.brand}
                    category={producto.category}
                    cantidad={producto.cantidad}
                />
                }
                })
            }
        </div>
        <footer>
            <p>Tienda ZAPAS </p>
        </footer>
        </>
    )


}

export default Products;
