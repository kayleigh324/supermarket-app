import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json');
        const data = await response.json();
        console.log(data)
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {Array.isArray(products) && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
};

export default ProductList;

