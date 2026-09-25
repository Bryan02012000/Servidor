import React from "react";
import "../Hojas-de-estilo/Botones.css"

function Botones({nombre, esBotonDeClic, manejarClic}){
    return(
        /* El botón ahora es independiente y solo se encarga de sí mismo */
        <button className={ esBotonDeClic ? 'boton-clic': 'boton-reiniciar'}
        onClick={manejarClic}>
            <p className="contenedor-texto">{nombre}</p>
        </button>
    )
}

export default Botones;