import React from 'react';
import CartItem from './CartItem';

function Cart({ productItems }) {
  //console.log(productItems);

  return (
    <div>
      <h2>this is Cart</h2>
      <ul>
        {productItems.map((i) => (
          <CartItem key={i.id} {...i} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
