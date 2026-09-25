import React from "react";
import '../hoja-de-estilos/Tareas.css'

function InputTareas({input, manejarCambio}){
    return(
        <input type="text" placeholder="Completar Proyecto" className="input-tarea" value={input} onChange={manejarCambio}></input>
    )
}

export default InputTareas;