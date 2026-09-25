import './App.css';
import Tarea from './componentes/Tareas';
import AgregarTarea from './componentes/AgregarTarea';
import InputTareas from './componentes/InputTarea';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [input, setInput]=useState('');
  const [tareas, setTareas] = useState([]);

  const manejarCambio=(e)=>{
    setInput(e.target.value)
  }
  //e (Objeto Evento): Es un objeto que React y JavaScript le entregan automáticamente a la función cuando ocurre una 
  // acción en la página (en este caso, un evento onChange cada vez que el usuario presiona o borra una tecla). 
  //e.target.value: Es la propiedad que contiene el texto actual que hay escrito dentro de esa caja de texto en ese instante preciso.

  


  const agregarTarea = ()=>{
    if(input.trim()){
      const tareaNueva={
      id:uuidv4(),
      texto:input,
      completada:false
    }
      setTareas([...tareas,tareaNueva]);//Sirven para copiar o desempacar todos los elementos existentes de un arreglo (o propiedades de un objeto) dentro de una nueva estructura.
      //: El operador spread (...tareas) copia todas las tareas guardadas previamente, y la coma con , input inserta el nuevo texto al final del arreglo copiado.
      setInput('');
    }
  }

  return (
    <div className="App">
      <h1 className='Titulo'>Tareas</h1>
      <div className='contenedor-principal'>
        <h1 className='content'>Mis Tareas</h1>
        <div className="contenedor-agregar">
          <InputTareas input={input} manejarCambio={manejarCambio}/> {/*//Aquí el input se pone porque en setInput('') reiniciamos. Sino se pone, el input siempre se queda con el valor y no sirve limpiarlo, porque no lo mostramos*/}
          <AgregarTarea agregar={agregarTarea}/>
          </div>
          <div className="contenedor-tareas">
            {tareas.map((tarea) => (//Es un método de JavaScript que itera sobre el arreglo tareas y devuelve un nuevo componente <Tarea/> por cada elemento encontrado.
            <Tarea key={tarea.id} nombre={tarea.texto} />//key={tarea.id}: Es un atributo único obligatorio que React exige cuando renderizas listas dinámicas. Le sirve a React para rastrear qué elementos han cambiado, se han agregado o se han eliminado, optimizando el rendimiento de la aplicación.
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
