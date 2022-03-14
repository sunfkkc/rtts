import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'


import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
