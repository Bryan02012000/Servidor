import React from "react"
import '../hojas-de-estilo/Botones.css'

function Botones({num, manejarClick}){

    const esOperador=(valor)=>{
        return isNaN(valor) && (valor!=='.') && (valor!=='=')
    };

    return(
        <button className={esOperador(num) ? 'boton-operador':'boton-numero'} 
        onClick={() => manejarClick && manejarClick(num)}>
            {num}
        </button>
    )
}

export default Botones;