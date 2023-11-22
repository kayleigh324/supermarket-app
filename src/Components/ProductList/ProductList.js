import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductDetail from '../ProductDetail/ProductDetail';
import Basket from '../Basket/Basket'; 
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json');
        const data = await response.json();
        console.log(data)
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    dispatch({ type: 'ADD_TO_BASKET', payload: product });
  };

  const handleRemoveFromBasket = (product) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: product });
  };
//calling Basket through here instead of App.js for props to provide cleaner code
  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id} onClick={() => handleProductClick(product)}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onRemoveFromBasket={handleRemoveFromBasket}
            />
          )}
          
          <Basket items={products} onRemoveFromBasket={handleRemoveFromBasket} />
        </>
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
};

export default ProductList;

