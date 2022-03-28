import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header';


import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Run from './pages/Run';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/run' element={<Run/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
