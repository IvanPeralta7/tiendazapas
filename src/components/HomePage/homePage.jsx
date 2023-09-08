import React from "react";
import Portada from "../HomePage/inicio.jpg"


import "./homepage.css";

export const HomePage = () =>{
    return(
        <div className="inicio">
            <h1>En este sitio encontraras las mejores zapatillas! </h1>
            <img src={Portada} alt="inicio" />
        </div>
    )
}

