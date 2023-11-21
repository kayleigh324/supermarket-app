import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {/* Add other details here */}
    </div>
  );
};

export default ProductDetail;