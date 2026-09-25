import React from "react";
import '../hojas-de-estilo/Botones.css'

function BotonClear({name, manejarClear}){
    return(
        <button className="boton-clear" onClick={manejarClear}>{name}</button>
    );
}
export default BotonClear;