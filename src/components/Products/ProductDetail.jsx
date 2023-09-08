import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import Button from '@mui/material/Button';
import "./productsStyles.css"


export const ProductDetail = () =>{
    const value = useContext(DataContext);
    const [productos] = value.products;
    const addCart = value.addCart;
    const [detail, setDetail] = useState([]);
    const params = useParams();
    let item = 0;

    useEffect(() =>{
        productos.forEach(producto => {
            if(producto.id === parseInt(params.id)){
                setDetail(producto);
            }
        });
    },[params.id,productos])

    return(
        <>
            {
                <div className="details">
                    <h2>{detail.title}</h2>
                    <div className="grid">
                        <p className="price">${detail.price} </p>
                        <Button size="small" variant="outlined" color="primary" onClick={() => addCart(detail.id)}>Añadir al carrito</Button>
                    </div>
                    <img src={detail.image} alt={detail.title} />
                        <div className="description">
                            <p><b>Descripcion: </b> {detail.description}
                            </p>
                        </div>
                </div>
            }
            <h2 className="relations">Productos Relacionados</h2>
            <div className="productos">
            { productos.map((producto) => {
                if((item < 4) &&(producto.brand === producto.brand)){
                    item++;
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
            </>
    )
}