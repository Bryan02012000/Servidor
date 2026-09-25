import React from "react";
import '../hoja-de-estilos/Tareas.css'


function Tarea({nombre}){
    return(
        <div className="tarea-creada">{nombre}
            <button className="eliminar">
                x
            </button>
        </div>
    )
}

export default Tarea;