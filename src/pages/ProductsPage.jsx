// src/pages/ProductsPage.jsx
import React from 'react';
import ProductList from '../components/ProductList/ProductList';

const ProductsPage = () => {
  // Ya no necesitamos onAddToCart aquí, ProductList lo obtendrá del contexto
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center">Nuestros Productos</h1>
      <ProductList /> {/* Ya no pasamos onAddToCart */}
    </div>
  );
};

export default ProductsPage;