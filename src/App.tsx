import React from 'react';
import './App.css';
import LayOut from './components/Layout';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <LayOut>
        <Main />
      </LayOut>
    </div>
  );
}

export default App;
