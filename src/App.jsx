// src/App.jsx
import React from 'react'; // Ya no necesitamos useState aquí para la autenticación
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Importaciones de Componentes ---
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import Login from './components/auth/Login';
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from './components/auth/PrivateRoute';

// --- Importaciones de Contextos ---
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext'; // ¡NUEVA Importación del AuthContext!

function App() {
  // *** Lógica de autenticación ELIMINADA de aquí y MOVida a AuthContext.js ***
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const handleLogin = () => setIsAuthenticated(true);
  // const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      {/* --- Envolvemos toda la aplicación con AuthProvider (y CarritoProvider) --- */}
      {/* Es importante que AuthProvider esté por encima de CarritoProvider si
          algún componente del carrito dependiera de la autenticación, aunque aquí no es el caso.
          Generalmente, los contextos más "globales" van más arriba. */}
      <AuthProvider>
        <CarritoProvider> {/* CarritoProvider se mantiene aquí */}
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* Login ya no recibe onLogin como prop, lo obtendrá del contexto */}
              <Route path="/login" element={<Login />} />

              {/* Ruta Protegida: PrivateRoute ya no recibe isAuthenticated como prop,
                  lo obtendrá del contexto */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute> {/* Ya no pasamos isAuthenticated */}
                    <DashboardPage /> {/* Ya no pasamos onLogout */}
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<h2 className="text-3xl font-bold text-center mt-10">404 - Página No Encontrada</h2>} />
            </Routes>
          </Layout>
        </CarritoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;