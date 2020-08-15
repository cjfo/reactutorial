import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import Cart from './Cart';

const items = [
  { id: 2321, name: 'Google Earth', price: 3, qty: 3 },
  { id: 23821, name: 'Zap App', price: 5, qty: 5 },
  { id: 262321, name: 'Price Null', price: 4, qty: 6 },
];

function App() {
  return (
    <div>
      <Cart productItems={items} />
      <hr />
      <Counter step={1} />
      {/* <Counter step={2} /> */}
      <MoodToggler />
      <NavBar />
      <Greeter name='Steve Jobs' age={89} excitement={12} />
      <Greeter name='Bill Gate' excitement={3} />
    </div>
  );
}

export default App;
