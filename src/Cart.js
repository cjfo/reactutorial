import React, { useState } from 'react';
import CartItem from './CartItem';

function Cart({ productItems }) {
  //console.log(productItems);

  const [products, setProducts] = useState(productItems);
  // TODO: Update Qty
  const updateQty = (id, newQty) => {
    const newItem = products.map((product) => {
      if (product.id === id) {
        return { ...product, qty: newQty };
      }
      return product;
    });
    setProducts(newItem);
  };

  const grandTotal = productItems.reduce(
    (total, value) => total + value.qty * value.price,
    0
  );

  return (
    <div>
      <h2>this is Cart</h2>
      <ul>
        {productItems.map((i) => (
          <CartItem key={i.id} {...i} updateQty={updateQty} />
        ))}
      </ul>
      <strong>Total $ {grandTotal}</strong>
    </div>
  );
}

export default Cart;
