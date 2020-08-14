import React from 'react';

function CartItem({ productItem }) {
  return (
    <div>
      <li>
        Name is ::::: {productItem.name} -- price----: {productItem.price} and
        qty---- {productItem.qty}
      </li>
    </div>
  );
}

export default CartItem;
