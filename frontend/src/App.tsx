import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Things from './pages/Things';
import Object from './pages/Object';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/things' element={<Things type="all" />} />
        <Route path='/things/table' element={<Things type="table" />} />
        <Route path='/things/cupboard' element={<Things type="cupboard" />} />
        <Route path='/things/chair' element={<Things type="chair" />} />
        <Route path='/info/:type/:objectid' element={<Object />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
