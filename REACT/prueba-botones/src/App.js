import Botones from "./componentes/Botones";
import './App.css';
import { useState } from "react";

function App(){

  const [numClicks, setNumClicks]=useState(0);
  const click=()=>{
    setNumClicks(numClicks+1);
  }

  const reiniciar=()=>{
    setNumClicks(0);
  }

  return (
     <div className="App">
    <h1>Contador de clicks</h1>
    <div className="contenedor-principal">
      <h1>{numClicks}</h1>
      <Botones
      nombre="Click"
      esBotonDeClick={true}
      manejarClick={click}
      />

      <Botones
      nombre="Reiniciar"
      esBotonDeClick={false}
      manejarClick={reiniciar}
      />
    </div>
    
    
  </div>
  );
 
}

export default App;