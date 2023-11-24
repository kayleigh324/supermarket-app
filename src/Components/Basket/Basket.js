import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Basket.css';

const Basket = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items) || [];

  const handleClick = (item) => {
    console.log('Remove clicked:', item);
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: item });
  };

  return (
    <div>
      <h2 className='basket-title'>Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Quantity: {item.quantity})
            <button onClick={() => handleClick(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
