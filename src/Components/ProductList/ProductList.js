import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductDetail from '../ProductDetail/ProductDetail';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json');
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    dispatch({ type: 'ADD_TO_BASKET', payload: product });
  };

  return (
    <div>
      <h1 className='title'>Product List</h1>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>  
      {filteredProducts.length > 0 ? (
        <>
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <strong>{product.name} - ${product.price}</strong>
                {searchTerm && (
                  <p>{product.description}</p>
                )}
                <button onClick={() => handleProductClick(product)}>Add to Basket</button>
              </li>
            ))}
          </ul>
          {selectedProduct && (
            <ProductDetail product={selectedProduct} />
          )}
        </>
      ) : (
        <div>No products match the search term.</div>
      )}
    </div>
  );
};

export default ProductList;
