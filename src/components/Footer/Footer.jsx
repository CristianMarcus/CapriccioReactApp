// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8 text-center mt-16 shadow-inner-lg">
      <div className="container mx-auto">
        {/* Información principal del copyright */}
        <p className="text-base mb-2">© {new Date().getFullYear()} Mi eCommerce. Todos los derechos reservados.</p>
        
        {/* Créditos de desarrollo con un toque amigable */}
        <p className="text-sm text-gray-400 mb-2">
          Desarrollado con <span className="text-red-400">❤️</span> por <span className="text-blue-300 font-semibold">Cristian Marcus</span>.
        </p>

        {/* Información adicional del desarrollador (DNI), con un estilo más sutil */}
        <p className="text-xs text-gray-500">
          DNI: 34.738.462
        </p>
      </div>
    </footer>
  );
};

export default Footer;