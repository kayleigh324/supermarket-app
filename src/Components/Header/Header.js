import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalItems = useSelector((state) => state.basket.totalItems) || 0;

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/basket">Basket ({totalItems} items)</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;