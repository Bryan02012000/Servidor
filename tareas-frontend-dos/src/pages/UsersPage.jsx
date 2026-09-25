import { useState, useEffect } from 'react';
import axios from 'axios';
//Esta página hace exactamente lo mismo que hacía tu TaskList original, pero para consultar los usuarios.

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al consultar usuarios:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ color: 'brown' }}>Cargando usuarios desde MongoDB...</p>;

  return (
    <div style={{ color: 'brown' }}>
      <h2>Lista de Usuarios</h2>
      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <ul style={{ paddingLeft: '20px' }}>
          {users.map(u => (
            <li key={u._id} style={{ marginBottom: '10px' }}>
              <strong>{u.name || u.nombre}</strong> — <span style={{ color: 'green' }}>{u.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersPage;