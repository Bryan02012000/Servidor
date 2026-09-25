import './App.css';
import Testimonio from './componentes/Testimonio';

function App(){
  return (
    <div className='App'>
      <h1>Esto dicen mis personajes favoritos</h1>
      <Testimonio
      imagen="Edward"
      nombre="Edward"
      cargo="Alquimista de acero"
      texto="Una lección sin dolor no tiene sentido. Eso es porque no se puede ganar algo sin sacrificar nada a cambio. Pero una vez que hayas soportado el dolor y lo hayas superado, ganarás un corazón más fuerte que todo lo demás. Así es, un corazón de acero."
      />
      <Testimonio
      imagen="Gojo"
      nombre="Gojo"
      cargo="El más fuerte"
      texto="Busca siempre la fuerza por ti mismo, no dependas de los demás para que te rescaten"
      />

      <Testimonio
      imagen="Levi"
      nombre="Levi"
      cargo="El soldado más fuerte de la humanidad"
      texto="La única cosa que nos está permitida... es creer que no nos arrepentiremos de la elección que hemos hecho."
      />


    </div>
  );
}

export default App