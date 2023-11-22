import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>No product details available.</div>;
  }

  console.log('ProductDetail component rendering:', product);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {/* Add other details here */}
    </div>
  );
};

export default ProductDetail;

