import React, { useState } from 'react';

function Counter() {
  const [count, addOne] = useState(1);
  const qtyCurrent = 5;
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  console.log(isHappy);

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => addOne(count + 1 > qtyCurrent ? qtyCurrent : count + 1)}
      >
        click +1
      </button>
      <button onClick={() => addOne(count - 1 < 0 ? 0 : count - 1)}>
        click -1
      </button>
      <h3 onClick={toggleIsHappy}>Icon {isHappy ? ':)' : ':('}</h3>
    </>
  );
}

export default Counter;
