import './App.css';
import Botones from './componentes/Botones';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'

  function App() {
    const [input, setInput] = useState('');

    const agregarInput=(valor)=>{
      setInput(input+valor);
    }

    const calcularResultado=()=>{
      if(input){
        setInput(evaluate(input));
      }else{
        alert("ingrese valores para realizar los cálculos")
      }
      
    };


    return (
      <div className="App">
        <h1>Calculadora Bryan</h1>
        <div className='contenedor-calculadora'>
          <div className='contenedor-pantalla'>{input}</div>
          <div className='contenedor-botones'>
            <Botones
            manejarClick={agregarInput}
            num="1"/>
            <Botones
            manejarClick={agregarInput}
            num="2"/>
            <Botones
            manejarClick={agregarInput}
            num="3"/>
            <Botones
            manejarClick={agregarInput}
            num="+"/>
            <Botones
            manejarClick={agregarInput}
            num="4"/>
            <Botones
            manejarClick={agregarInput}
            num="5"/>
            <Botones
            manejarClick={agregarInput}
            num="6"/>
            <Botones
            manejarClick={agregarInput}
            num="-"/>
            <Botones
            manejarClick={agregarInput}
            num="7"/>
            <Botones
            manejarClick={agregarInput}
            num="8"/>
            <Botones
            manejarClick={agregarInput}
            num="9"/>
            <Botones
            manejarClick={agregarInput}
            num="*"/>
            <Botones
            manejarClick={calcularResultado}
            num="="/>
            <Botones
            manejarClick={agregarInput}
            num="0"/>
            <Botones
            manejarClick={agregarInput}
            num="."/>
            <Botones
            manejarClick={agregarInput}
            num="/"/>
            <BotonClear 
            manejarClear={()=> setInput('')}
            name="clear"/>

          </div>
        </div>
        
      </div>
    );
  }

export default App;
