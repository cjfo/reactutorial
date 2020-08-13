import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter({ step = 2 }) {
  const [count, setCount] = useState(1);
  const minQty = 1;
  const maxQty = 5;

  useEffect(() => {
    const counter = count > maxQty ? maxQty : count < minQty ? minQty : count;
    setCount(counter);
  }, [count]);

  return (
    <div className='CounterCss'>
      <button onClick={() => setCount(count + step)}>Add +{step}</button>
      <p>
        Number is <strong>{count}</strong>
      </p>
      <button onClick={() => setCount(count - step)}>Reduced -{step}</button>
    </div>
  );
}

export default Counter;
