// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
 //import './tailwind.output.css'; // <--- ELIMINA O COMENTA ESTA LÍNEA
//import './index.css';           // <--- ASEGÚRATE DE QUE ESTA SEA LA LÍNEA CORRECTA
                                // Y que C:\mi-nuevo-proyecto-prueba\src\index.css exista
                                // y contenga las directivas @tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);