// src/pages/CartPage.jsx
import React from 'react';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  // Ya no necesitamos cartItems, onUpdateQuantity, onRemoveItem aquí,
  // Cart los obtendrá del contexto
  return (
    <div>
      {/* El título está en el componente Cart ahora, así que podemos mantenerlo simple aquí */}
      <Cart /> {/* Ya no pasamos props del carrito */}
    </div>
  );
};

export default CartPage;