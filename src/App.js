import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';

function App() {
  return (
    <>
      <Counter step={1} />
      {/* <Counter step={2} /> */}
      <MoodToggler />
      <NavBar />
      <Greeter name='Steve Jobs' age={89} excitement={12} />
      <Greeter name='Bill Gate' excitement={3} />
    </>
  );
}

export default App;
