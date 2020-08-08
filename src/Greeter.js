import React from 'react';

function Greeter({ name, age = 23, excitement = 1 }) {
  // *** Function
  const sayGreet = () => {
    alert(`Hello There, ${name}`);
  };

  return (
    <>
      <p>
        Name as <strong>{name}</strong>, & age is
        <strong>
          {age} {'!'.repeat(excitement)}
        </strong>
        <button onClick={sayGreet}>Click me</button>
      </p>
    </>
  );
}

export default Greeter;
