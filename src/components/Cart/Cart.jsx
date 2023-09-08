import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import "./cart.css";


export const Cart = () => {
    const value = useContext(DataContext);
    const [menu,setMenu]= value.menu;
    const [cart, setCart] = value.cart;
    const [total] = value.total;

    
    const tooglefalse = () => {
        setMenu(false);
    }
    const showCartSection = menu ? "cart-section show" : "cart-section";
    const showCart = menu ? "cart show" : "cart";

    const substracionProduct = id => {
        cart.forEach(item =>{
            if (item.id===id){
                item.cantidad === 1 ? item.cantidad = 1 :
                item.cantidad -=1 ; 
            }
            setCart ([...cart])
        })
    }

    const addProduct = id => {
        cart.forEach(item =>{
            if (item.id===id){
                item.cantidad +=1;
            }
            setCart ([...cart])
        })
    }
    
    const removeProducto = id => {
        if (window.confirm("Queres Eliminar el producto?")){
            cart.forEach ((item, index) =>{
                if(item.id === id){
                    item.cantidad = 1;
                    cart.splice(index,1);
                }
            })
            setCart([...cart])
            }
        }

    return (
        <div className={showCartSection}>
            <div className={showCart}>
                <div className="cart-close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="cart-center">
                    {
                        cart.length === 0 ? <h2 style={{
                            textAlign:"center", fontSize:"3rem" }}>Carrito Vacio!</h2> : <>
                        {   
                        cart.map((producto) =>(
                            <div className="cart-item" key={producto.id}>
                                <img src={producto.image} alt={producto.title} />
                                <div className="cart-data">
                                <h3>{producto.title}</h3>
                                <p className="price">${producto.price}</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid" onClick = {() => addProduct(producto.id)}></box-icon>
                                <p className="cantidad">{producto.cantidad}</p>
                                <box-icon name="down-arrow" type="solid" onClick = {() =>substracionProduct(producto.id)}></box-icon>
                            </div>
                            <div className="remove-item" onClick={()=> removeProducto(producto.id)}>
                                <box-icon name="trash" size="lg"></box-icon>
                            </div>
                        </div>  
                    ))
                    } 
                    </>
                    }
                </div>
                <div className="cart-footer">
                    <h3>Total:${total}</h3>
                    <button className="btn">Pagar</button>
                </div>
            </div>
        </div>
    )
}