import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter({ step = 2, max = 8, min = 1 }) {
  const [count, setCount] = useState(1);
  const minQty = min;
  const maxQty = max;

  useEffect(() => {
    const counter = count > maxQty ? maxQty : count < minQty ? minQty : count;
    setCount(counter);
  }, [count]);

  return (
    <div className='CounterCss'>
      <button
        onClick={() => setCount(count - step)}
        disabled={count === min ? true : false}
      >
        -{step}
      </button>
      <span>
        [ <strong>{count}</strong> ]
      </span>
      <button
        onClick={() => setCount(count + step)}
        disabled={count === max ? true : false}
      >
        +{step}
      </button>
    </div>
  );
}

export default Counter;
