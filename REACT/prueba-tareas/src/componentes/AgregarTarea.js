import React from "react";
import '../hoja-de-estilos/Tareas.css'

function AgregarTarea({agregar}){
    return(
        <button className="agregar-tarea" onClick={()=>agregar()}>Agregar Tarea</button>
    )
}

export default AgregarTarea;