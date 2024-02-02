import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importamos el componente principal de la aplicación
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderizamos el componente principal de la aplicación */}
  </React.StrictMode>,
);
