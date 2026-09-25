import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 Importamos el enrutador//Cómo un policia que se encarga de ver la URL
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 Envolvente principal OBLIGATORIO PORQUE ES EL QUE LE DA "PODER" DE SUS RUTAS A TODA LA APP */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);