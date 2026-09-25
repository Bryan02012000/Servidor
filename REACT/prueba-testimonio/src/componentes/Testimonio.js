import React from "react";
import "../hojas-de-estilo/Testimonio.css"

function Testimonio({imagen, nombre, cargo, texto}){
    return (
    <div className="contenedor-testimonio">
        <img className="contenedor-imagen" src={require(`../imagenes/${imagen}.png`)} 
        alt="Imagen de Edward"/>

        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio">{nombre}</p>
            <p className="cargo-testimonio">{cargo}</p>
            <p className="texto-testimonio">{texto}</p>

        </div>
    </div>
    );
}

export default Testimonio;