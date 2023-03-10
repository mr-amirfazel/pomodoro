import React from 'react';
import './App.css';
import Timer from './components/timer/timer';
import Header from './components/Base/Header';
import { Footer } from './components/Base/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer minutes={60} seconds={60}></Timer>
      <Footer />
    </div>
  );
}

export default App;
