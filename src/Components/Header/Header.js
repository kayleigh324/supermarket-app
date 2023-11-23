import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/images/cognito_logo_brick_small_1.png'


  const Header = () => {
  const totalItems = useSelector((state) => state.basket.totalItems) || 0;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
      <img className="jss507" src={logoImage} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={handleMenuClick}>
        <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
      </div>
      <nav className={`nav-list ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/">Browse Products</Link></li>
          <li><Link to="/basket">Basket ({totalItems} items)</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
