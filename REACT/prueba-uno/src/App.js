import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Esto dicen mis personajes favoritos</h1>
        <Testimonio 
        nombre='Edward Elric'
      pais='Japón'
      imagen='Edward'
      cargo='Alquimista de Acero'
      testimonio='Una lección sin dolor no tiene sentido. Eso es porque no se puede ganar algo sin sacrificar nada a cambio. Pero una vez que hayas soportado el dolor y lo hayas superado, ganarás un corazón más fuerte que todo lo demás. Así es, un corazón de acero.'
      />

      <Testimonio 
        nombre='Gojo Satoru'
      pais='Japón'
      imagen='Gojo'
      cargo='El más fuerte'
      testimonio='Busca siempre la fuerza por ti mismo, no dependas de los demás para que te rescaten'
      />

      <Testimonio 
        nombre='Levi Ackerman'
      pais='Japón'
      imagen='Levi'
      cargo='El soldado más fuerte de la humanidad'
      testimonio='La única cosa que nos está permitida... es creer que no nos arrepentiremos de la elección que hemos hecho.'
      />

      </div>
    </div>
  );
}

export default App;
