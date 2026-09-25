import { Routes, Route, Link } from 'react-router-dom'; //importamos htas principales de react.router
import TasksPage from './pages/TasksPage';//IMPORTAMOS LAS ´ÁGINAS
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Barra de Navegación */}
      <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #444' }}>
        <Link to="/" style={{ color: '#61dafbaa', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>
          📋 Tareas
        </Link>{/* link sustituye a la etiqueta a. La. propiedad /, le dice que cauando el usuario
        haga click, cambie la URL A /, PERO NO RECARGUES LA PÁGINA, SÓLO AVÍSALE AL POLICIA QUE CAMBIAMOS DE DIERECCIÓN */}
        <Link to="/users" style={{ color: '#61dafbaa', textDecoration: 'none', fontWeight: 'bold' }}>
          👥 Usuarios
        </Link>
      </nav>

      {/* Definición de Rutas */}
      <Routes>
        <Route path="/" element={<TasksPage />} /> {/* ENTONCES, SI LA RUTA DICE /, ENTONCES VAS A MOSTRAR TaskPage */}
        <Route path="/users" element={<UsersPage />} />{/* Y, SI LA RUTA DICE /users, ENTONCES VAS A MOSTRAR UsersPage */}
      </Routes>
    </div>
  );
}

export default App;