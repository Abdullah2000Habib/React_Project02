import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './design-system/main.css';
import Home from './pages/home/Home';

function App() {
  return (
          <BrowserRouter>

          <Routes>

            <Route  path='/' element={<Home/>} />



          </Routes>
          
          
          </BrowserRouter>
  )
}

export default App
