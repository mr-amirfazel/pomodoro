import React from 'react';
import './App.css';
import LayOut from './components/Layout';
import Main from './components/Main';
import { AppContextProvider } from './context/store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppContextProvider>
        <LayOut>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        </LayOut>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
