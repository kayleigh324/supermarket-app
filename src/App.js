import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Basket from './Components/Basket/Basket';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
};

export default App;
