import '../hojas-de-estilo/Botones.css'

function Botones({nombre, esBotonDeClick, manejarClick}){
    return(
        <button className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'} onClick={manejarClick} >
            <p className="contenedor-cuenta">{nombre}</p>
        </button>
    )
}

export default Botones;