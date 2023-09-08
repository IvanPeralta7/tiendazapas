import React, { useContext } from "react";
import Nike from "../Header/Nike.jpg"
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import "./header.css";

export const Header = () =>{
    const value= useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [cart] = value.cart;
    const toogleMenu = () => {
        setMenu(!menu);
    }

    return(
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Nike} alt="logo" width="150" />
                </div>
            </Link>
            <ul>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/productos">ZAPATILLAS</Link></li>
            </ul>
            <div className="cart-icon" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="total">{cart.length}</span>
            </div>
        </header>
    )
}

