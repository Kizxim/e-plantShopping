import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">🌿 Paradise Nursery</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{totalQuantity}</span>
          </Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">🌿 Paradise Nursery</h1>
      <p className="landing-subtitle">Bring nature home — one plant at a time.</p>
      <Link to="/plants">
        <button className="btn-get-started">Get Started</button>
      </Link>
    </div>
  );
}

export default App;
