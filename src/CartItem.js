import React from 'react';

function CartItem({ id, name, price = 99, qty, updateQty }) {
  console.log(qty);

  return (
    <div>
      <li>
        Name :: {name} --price-:: {price} <br />
        qty--::
        <div className='CounterCss'>
          <button
            onClick={() => updateQty(id, qty - 1)}
            disabled={qty <= 1 ? true : false}
          >
            -1
          </button>
          <span>
            [ <strong>{qty}</strong> ]
          </span>
          {/* new issue TODO: need optimize maxQty disable addButton */}
          <button onClick={() => updateQty(id, qty + 1)} disabled={false}>
            +1
          </button>
        </div>
        - Total {(qty * price).toFixed(2)}
      </li>
    </div>
  );
}

// count |step,min,max,initValue
export default CartItem;
