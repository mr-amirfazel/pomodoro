import React from 'react';
import './App.css';
import LayOut from './components/Layout';
import Timer from './components/timer/timer';


function App() {
  return (
    <div className="App">
      <LayOut>
        <Timer minutes={60} seconds={60}></Timer>
      </LayOut>
    </div>
  );
}

export default App;
