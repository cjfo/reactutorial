import React from 'react';

function CartItem({ name, price = 99, qty }) {
  return (
    <div>
      <li>
        Name is ::::: {name} -- price----: {price} and qty---- {qty}
      </li>
    </div>
  );
}

export default CartItem;
