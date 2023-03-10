import React from 'react';
import './App.css';
import Timer from './components/timer/timer'

function App() {
  return (
    <div className="App">
      <Timer minutes={60} seconds={60}></Timer>
    </div>
  );
}

export default App;
