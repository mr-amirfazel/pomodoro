import React from 'react';
import './App.css';
import Timer from './components/timer/timer';
import Header from './components/Base/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer minutes={60} seconds={60}></Timer>
    </div>
  );
}

export default App;
