import React, { useState, useEffect } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json');
        const data = await response.json();
        console.log(data)
        setProducts(data);
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
  };


  return (
    <div>
      <h1>Product List</h1>
      {Array.isArray(products) && products.length > 0 ? (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id} onClick={() => handleProductClick(product)}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
          {selectedProduct && <ProductDetail product={selectedProduct} />}
        </>
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
};

export default ProductList;


