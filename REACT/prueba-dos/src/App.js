import logo from './logo.svg';
import './App.css';
import Botones from './Componentes/Botones';
import Contador from './Componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks]=useState(0)

  const manejarClic=()=>{
    setNumClicks(numClicks+1);
  }

  const reiniciarContador=() =>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div>

        <h1 className='title'>Contador de clicks</h1>
        <Contador 
        numClicks={numClicks}/>
        <Botones 
        nombre='Número de clicks'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Botones 
        nombre='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
      
    </div>
  );
}

export default App;
