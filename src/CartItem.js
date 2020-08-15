import React from 'react';
import Counter from './Counter';

function CartItem({ id, name, price = 99, qty, updateQty }) {
  return (
    <div>
      <li>
        Name :: {name} --price-:: {price} <br />
        qty--:: <Counter step={1} max={qty} min={1} />- Total{' '}
        {(qty * price).toFixed(2)}
      </li>
    </div>
  );
}

// count |step,min,max,initValue
export default CartItem;
