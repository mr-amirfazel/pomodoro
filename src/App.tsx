import React from 'react';
import './App.css';
import LayOut from './components/Layout';
import Main from './components/Main';
import { AppContextProvider } from './context/store';


function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <LayOut>
          <Main />
        </LayOut>
      </AppContextProvider>
    </div>
  );
}

export default App;
