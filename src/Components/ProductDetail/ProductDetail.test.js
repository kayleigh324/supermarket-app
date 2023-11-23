import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';

test('renders product details', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    price: 15.99,
  };

  render(<ProductDetail product={product} />);

  const productName = screen.getByText(/Test Product/i);
  const productPrice = screen.getByText(/Price: \$15.99/i);

  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});

test('renders "No product details available" when product is null', () => {
  render(<ProductDetail product={null} />);

  const noDetailsMessage = screen.getByText(/No product details available/i);

  expect(noDetailsMessage).toBeInTheDocument();
});
