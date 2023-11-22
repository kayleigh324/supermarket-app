// Basket.js
import React from 'react';
import { useSelector } from 'react-redux';

const Basket = ({ onRemoveFromBasket }) => {
  const items = useSelector((state) => state.basket.items);

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}
          <button onClick={() => onRemoveFromBasket(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
